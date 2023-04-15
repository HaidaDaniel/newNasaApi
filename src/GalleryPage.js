import MarsPhotos from './MarsPhotos'
import Filters from './Filters'

import './GalleryPage.css'

function GalleryPage() {

    return (

        <div className='gallerypage'>
            <div className='header'>
                <div className="textLineHeader"></div>
                <div className='GPh2'><h2>Gallery</h2></div>

                <div className="textLineMain"></div></div>



            <div className='main'>

                <MarsPhotos />
                <Filters />

            </div>


        </div>



    )

}
export default GalleryPage