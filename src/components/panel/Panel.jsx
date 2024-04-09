import Image from 'next/image'

import Foot from './Foot'
import Content from './Content'

const Panel = ({title, subtitle, options, ...rest}) =>{

    return (
        <div className="box pt-0 pb-0 pr-0 pl-0">
            <section className={`hero`}>
                <div className="hero-body ">
                    <div className="content is-pulled-right">
                      
                    </div>
                    <figure className="image is-48x48 is-pulled-left mr-3">
                        <Image className="" src={'/logo/logo.png'} priority alt="marca" width={500} height={500}/>
                    </figure>
                    <p className="title">
                        {title}
                    </p>
                    <p className="subtitle">
                        {subtitle}
                    </p>
                    <Content {...rest}/>
                </div>

                <Foot {...rest}/>
            </section>
        </div>
    )
}

export default Panel