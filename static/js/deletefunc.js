(() => {
    const vDelBtn = document.querySelector('.venue_delte');
    vDelBtn?.addEventListener('click', e => {
        e.preventDefault();
        const venueId =vDelBtn.getAttribute('id');
        fetch(`/venue/${venueId}/delete`, {
            method: "DELETE"
        })
            .then(res => res.json())
            .then(data => {
                window.location = data.homeurl;
            })
            .catch(err =>
                window.location = '/500'
            );
    });

    const aDelBtn = document.querySelector('.artist_delete');
    aDelBtn?.addEventListener('click', e => {
        e.preventDefault();
        const artistId = aDelBtn.getAttribute('id');
        fetch(`/artists/${artistId}/delete`, {
            method: "DELETE"
        })
            .then(res => res.json())
            .then(data => {
                window.location = data.homeurl;
            })
            .catch(err => 
                window.location = '/500'
            );
    })
})();