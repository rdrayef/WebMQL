function loadCards()
{
    let s = '' ; 
    for (let i = 0; i < cards.length; i++) {
        s += `
            <div class="card">
                <img  src="images/${cards[i].img}" />
                <header>${cards[i].title}</header>
                <p>${cards[i].content}</p>
            </div>
        `
    }
    document.getElementById('cards-list').innerHTML = s;
}