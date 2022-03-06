
document.getElementById( 'add-border' ).addEventListener( 'click', function () {
    const container = document.getElementById( 'friend-container' );
    container.style.border = '2px solid gray';
    container.style.padding = '20px';
    container.style.margin = '20px';
} );
document.getElementById( 'add-background' ).addEventListener( 'click', function () {
    const friends = document.getElementsByClassName( 'friend' );
    for ( const friend of friends ) {
        friend.style.backgroundColor = 'yellow';
        friend.style.border = '1px solid red';
        friend.style.borderRadius = '15px';
        friend.style.padding = '15px';
        friend.style.margin = '15px';
    }
} );
document.getElementById( 'add-friend' ).addEventListener( 'click', function () {
    const container = document.getElementById( 'friend-container' );
    const friendDiv = document.createElement( 'div' );
    friendDiv.classList.add( 'friend' );
    friendDiv.innerHTML = `
    <h3 class="friend-name">New Friend</h3>
    <p>Officia expedita, quia pariatur tempora veritatis repellendus eius!</p>
    `;
    container.appendChild( friendDiv );
} );



