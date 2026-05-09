const initFavoritesLinks = () => {
    const addLinkButton = document.getElementById("addLink");
    const containerFavoritesLinks = document.getElementById("container-favorites-links");
    const urlName = document.getElementById("urlName");
    const urlInput = document.getElementById("url");
    let i = 1;
    //Validate elements in the DOM
    if (!addLinkButton || !containerFavoritesLinks || !urlName || !urlInput) {
        alert("Element in DOM not found");
        return;
    } 
    //Functions 
    const validateInput = (urlName, url) => {
        if (urlName.value.trim() === "")  {
            throw new Error("Please enter a name for your link");
        } else if (url.value.trim() === "") {
            throw new Error("Please enter a URL for your link");
        } 
        //Validate URL
        try {
            new URL(url.value);
        } catch(error) {
            throw new Error("Please enter a valid URL");
        }
    }

    const addLinkToFavorites = (urlName, url, id) => {
        containerFavoritesLinks.innerHTML += `
            <div class="favorite-link glass-card" data-id="${id}">
                <button class="favorite-link-delete">X</button>
                <a class="favorite-link-anchor" href="${url}" target="_blank">${urlName}</a>
            </div>
        `;
    }

    //Load favorites links from local storage
    let favoritesLinks = localStorage.getItem("favoritesLinks");
    if (!favoritesLinks) {
        favoritesLinks = [];
    } else {
        try{
            favoritesLinks = JSON.parse(favoritesLinks);
        } catch(error) {
            favoritesLinks = [];
        }
        favoritesLinks.forEach((favoriteLink) => {
            addLinkToFavorites(favoriteLink.urlName, favoriteLink.url, favoriteLink.id);
            i = favoriteLink.id;
        })
        i++;
    }
    addLinkButton.addEventListener("click", () => {
        try {
            //Validate inputs
            validateInput(urlName, urlInput);
            favoritesLinks.push(
                {
                    id: i,
                    urlName: urlName.value, 
                    url: urlInput.value
                }
            );
            //Add to favorites links container
            addLinkToFavorites(urlName.value, urlInput.value, i);
            //Save in local storage
            localStorage.setItem("favoritesLinks", JSON.stringify(favoritesLinks));
            //Clear inputs
            urlName.value = "";
            urlInput.value = "";
            //Increment id for next link  
            i++;
        } catch (error) {
            alert(error.message);
        }
    });

    containerFavoritesLinks.addEventListener("click", (event) =>{
        //console.log(event.target);
        const deleteButton = event.target.closest(".favorite-link-delete");
        if (!deleteButton) {
            return;
        }
        const card = deleteButton.closest(".favorite-link");
        const id = card.dataset.id;
        console.log(card);
        card.remove();

        favoritesLinks = favoritesLinks.filter((link) => {
            return link.id !== parseInt(id);
        })

        localStorage.setItem("favoritesLinks", JSON.stringify(favoritesLinks));
    });
}

initFavoritesLinks();
