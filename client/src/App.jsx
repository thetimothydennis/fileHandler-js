import './App.css'

function App() {

  return (
    <>
      <h1>Hello world!</h1>
      <form id="file-form" method="POST" encType="multipart/form-data" action="/api/fileupload">
        <label className="input-label" htmlFor="file-upload">File to upload</label>
        <input className="input-field" type="file" name="file-upload" id="fileinput" />
        <input className="input-field" id="file-submit" name="submit-file" type="submit" />
      </form>
      <form id="get-file" method="POST" action="/api/getfile">
        <input className="input-field" type="text" name="file-get" />
        <input className="input-field" type="Submit" />
      </form>
    </>
  )
}

export default App
