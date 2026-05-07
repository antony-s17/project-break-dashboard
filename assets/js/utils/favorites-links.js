const initFavoritesLinks = () => {
    const addLinkButton = document.getElementById("addLink");
    const containerFavoritesLinks = document.getElementById("container-favorites-links");
    const urlName = document.getElementById("urlName");
    const urlInput = document.getElementById("url");

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

    const addLinkToFavorites = (urlName, url) => {
        containerFavoritesLinks.innerHTML += `
            <div class="favorite-link">
                <a href="${url}" target="_blank">${urlName}</a>
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
            addLinkToFavorites(favoriteLink.urlName, favoriteLink.url);
        })
    }
    addLinkButton.addEventListener("click", () => {
        try {
            //Validate inputs
            validateInput(urlName, urlInput);
            favoritesLinks.push(
                {
                    urlName: urlName.value, 
                    url: urlInput.value
                }
            );
            //Add to favorites links container
            addLinkToFavorites(urlName.value, urlInput.value);
            //Save in local storage
            localStorage.setItem("favoritesLinks", JSON.stringify(favoritesLinks));
            //Clear inputs
            urlName.value = "";
            urlInput.value = "";  
            
        } catch (error) {
            alert(error.message);
        }
    });
}

initFavoritesLinks();
