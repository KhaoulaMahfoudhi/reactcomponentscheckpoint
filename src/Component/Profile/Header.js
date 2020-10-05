import React from 'react'
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebookF } from '@fortawesome/free-brands-svg-icons' 
import { faPhone } from '@fortawesome/free-solid-svg-icons'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'
library.add(faFacebookF); 


function Header(props) {
return (
    <div className="logos">
<div className="icon">

<FontAwesomeIcon icon={['fab', 'facebook-f']} />
</div>
<div className="icon">
<FontAwesomeIcon icon={faEnvelope} />

</div>

<div className="icon">
<FontAwesomeIcon icon={faPhone} />



</div>

    </div>

)

}
export default Header;