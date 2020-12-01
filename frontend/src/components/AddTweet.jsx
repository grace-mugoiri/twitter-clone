import React from 'react';
import { Editor } from '@tinymce/tinymce-react/lib/cjs/main/ts';

function AddTweet() {
  const [content, setContent] = React.useState('');
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
export default AddTweet;
