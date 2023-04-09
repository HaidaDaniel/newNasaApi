import MarsPhotos from './MarsPhotos'
import Filters from './Filters'

import './GalleryPage.css'

function GalleryPage() {

return(

<div className='GalleryPage'>

    <div className="textLineHeader"></div>
    <div className='GPh2'><h2>Gallery</h2></div>
    
    <div className="textLineMain"></div>

   
    <div className='GPmain'>
         
        <MarsPhotos/>
        <Filters />

    </div>


</div>
    
    

)

}
export default GalleryPage