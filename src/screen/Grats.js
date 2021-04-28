import './Grats.css'

const Grats = (mode) => {
    console.log(mode)
    return <h2 className='grats'>{mode.location.props.mode?'Bravo ! Tu as trouvé Ingrid ! Tu as de très bons yeux !':'Bravo ! Nous on a pas réussi ! Essai le mode difficile'}</h2>
}

export default Grats
