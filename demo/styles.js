document.addEventListener('DOMContentLoaded', () => {
    body = new Stylus('html, body')
    body.addStyle({
        padding: 0,
        margin: 0,
        fontFamily: 'Avenir Next',
        height: '100%'
    })

    all = new Stylus('*')
    all.addStyle({
        padding: 0,
        margin: 0,
    })

    header = new Stylus('#header')
    header.addStyle({
        width: '100%',
        height: '80px',
        backgroundColor: '#00b894',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between'
    })

    logo = new Stylus('#logo')
    logo.addStyle({
        fontsize: '15px',
        fontWeight: 500,
        margin: 'auto 50px'
    })

    ul = new Stylus('#nav')
    ul.addStyle({
        listStyle: 'none',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        flexWrap: 'wrap'
    })

    li = new Stylus('li')
    li.addStyle({
        padding: '0 15px',
        margin: 'auto 0',
    })

    playground = new Stylus('#playground')
    playground.addStyle({
        width: '100%',
        height: '500px',
        backgroundColor: 'rebeccapurple',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-evenly'
    })

    card = new Stylus('.card')
    card.addStyle({
        width: '200px',
        height: '200px',
        backgroundColor: 'red',
        margin: '20px'
    })

    newCard = new Stylus('.new-card')
    newCard.inherit('.card')
    newCard.addStyle({
        backgroundColor: 'green',
        width: card.style('width'),
        height: '300px'
    })
})