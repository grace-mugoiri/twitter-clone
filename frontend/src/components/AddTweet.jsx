import React from 'react';
import { Editor } from '@tinymce/tinymce-react/lib/cjs/main/ts';
import Axios from 'axios';

class AddTweet extends React.Component {
    state = { content: '' }

    handleEditorChange = (content, editor) => {
      console.log(content);
      this.setState({ content });
    }

    submitForm = (e) => {
      e.preventDefault();
      Axios.post('/api/addtweet', {
        title: document.getElementById('title').nodeValue,
        content: this.state.content,
      }, {
        headers: {
          Authorization: `Bearer${localStorage.getItem('token')}`,
        },
	  }).then((res) => {
	    if (res.data.success) {
	      window.location.reload();
	    }
	  });
    }

    render() {
	  return (
  <div className="w3-modal w3-animate-opacity" id="addTweet">
    <div className="w3-modal-content w3-card">
      <header className="w3-container w3-blue">
        <span
          className="w3-button w3-display-topright w3-hover-none w3-hover-text-white"
          onClick={() => {
							  document.getElementById('addTweet').style.dispaly = 'none';
          }}
        >
          X
        </span>
        <h2>Add tweet </h2>
      </header>
      <form className="w3-container">
        <div className="w3-section">
          <p>
            <label htmlFor="title">Title</label>
            <input type="text" className="w3-input w3-border w3-margin-bottom" />
          </p>
          <Editor
            initialValue="<p> This is the initial content of the editor </p>"
            apiKey="tf6hnh4z2e89bkt04h21052lka44r27mhz9ger9lae84utsd"
            init={{
								  height: 300,
								  menubar: false,
								  statusbar: false,
								  toolbar_mode: 'sliding',
								  plugins: [
								    'advlist autolink lists link image imagetools media emoticons preview anchor',
								    'searchreplace visualblocks code fullscreen',
								    'insertdatetime media table paste code help wordcount',
								  ],
								  toolbar:
										'undo redo | formatselect | bold italic underline strikethrough | image anchor media | \
                            alignleft aligncenter alignright alignjustify | \
                                outdent indent | bulllist numlist | fullscreen preview | emoticons help',
								  contextmenu: 'bold italic underline indent outdent help',

            }}
            onEditorChange={this.handleEditorChange}
          />
          <p>
            <button className="w3-button w3-blue" type="submit">Post</button>
          </p>
        </div>
      </form>
    </div>
  </div>
	  );
    }
}
export default AddTweet;
