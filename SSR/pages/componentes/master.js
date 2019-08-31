import Head from 'next/head'

const Masterpage=(props)=>(


    <div>

        <Head>
            <title>Bitcoin App</title>
            <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no"/>
            <link rel="styleshret" href=".../../bootstrap.min.css"></link>
        </Head>
        {props.children}
    </div>




);

export default Masterpage;