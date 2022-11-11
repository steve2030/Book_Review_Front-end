import React, { useEffect, useState } from "react";
import parse from 'html-react-parser';

import '../index.css';
import add from '../images/add.svg'

function UploadBook(){
    let count = 0;
    const [showResults, setShowResults] = React.useState(true)
    const [changes, setChanges]= React.useState("")
     
    function uploadImg(e){
       let file = e.target.files[0];
        let _this = e.target;
        setShowResults(!showResults);
        let fileData = new FileReader();
        fileData.onload = function(e){
            var span = '<img className="thumb mrm mts" src="' + e.target.result + '" title="' + escape(file.name) + '"/><span class="remove_img_preview"></span>';
            setChanges(span);
            console.log(span);
        }
        fileData.readAsDataURL(file);
        e.target.value = "";

    } 
    function previewChange(e){
        setChanges("");
        setShowResults(true)
    }
    return(
        <div className='container'>
            <div className='row my-5 d-flex justify-content-center align-content-center align-items-center'>
                <div className='col-md-6'>
                    <strong className="text-start addBook">Add Book</strong>
            
               <form className="postImageForm my-5">
               <div className="post-image post-image-placeholder mrm mts empty">
               
                   {showResults ?  <div className="upload-section">
                    <input type="file" id="Photofile1" className="upload-img " onChange={uploadImg} required accept="image/*" />
                    <label className="icon-camera" for="Photofile1">
                        <img src={add} />
                    </label>
                    <p className="uppercase text-muted">Book Image</p>
                    </div> :  <div className="preview-section" onClick={previewChange}>{parse(changes)}</div> }
                    
                   
                 </div>
               </form>

                </div>
                <div className='col-md-6 form-sec text-left'>
                   <form className='m-3 '>
                    <div className="d-flex flex-column justify-content-center align-items-start">
                         <label className="form-label ">Book Name</label>
                    <input type="text" placeholder='Enter book' className='form-control'/>
                    <label className="form-label my-3">Author Name</label>
                    <input type="text" placeholder='Enter author name'  className='form-control'/>
                    <label className="form-label my-3">Book Description</label>
                    <input type="text " placeholder='Enter book description'  className='form-control'/>
                    <label className="form-label my-3">Category</label>
                        <select class="form-control " id="exampleFormControlSelect1">
                            <option>Academic</option>
                            <option>Journal</option>
                            <option>Fiction</option>
                            <option>Poetry</option>
                    </select>
                    <label className="form-label my-3">ISBN</label>
                    <input type="number" placeholder='Enter ISBN Number'  className='form-control'/>
                    
                
                    </div>
                         <button className='btn btn-primary my-5'>Add Book</button>


                   </form>
                    
                </div>
                
            </div>
        </div>
    )

}
export default UploadBook;