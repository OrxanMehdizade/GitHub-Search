let contGit = document.getElementById('contenirGit');
let searchID = document.getElementById('searchId');
const img = document.getElementById("imgId");
const gitUrl = document.getElementById("gitUrl");
const blogId = document.getElementById("blogId");
const cityId = document.getElementById("cityId");
const emailId = document.getElementById("emailId");
const followersId = document.getElementById("followersId");
const followingId = document.getElementById("followingId");
const pName = document.getElementById("pName");
const pLogin = document.getElementById("pLogin");

searchID.addEventListener('input', showData);

function showData() {
    contGit.style.display = "block";
    const gitName = searchID.value;
    if (gitName) {
        const xml = new XMLHttpRequest();
        xml.open("GET", `https://api.github.com/users/${gitName}`, true);
        xml.setRequestHeader("User-Agent", "YourAppName"); // Your application name
        xml.setRequestHeader("Authorization", "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");


        xml.onload = function () {
            if (xml.status === 200) {
                const gitData = JSON.parse(xml.responseText);
                img.src = gitData.avatar_url;
                gitUrl.textContent = `Url to github: ${gitData.html_url}`;
                blogId.textContent = `Blog: ${gitData.blog || "N/A"}`;
                cityId.textContent = `City: ${gitData.location || "N/A"}`;
                emailId.textContent = `Email: ${gitData.email || "N/A"}`;
                followersId.textContent = `Followers: ${gitData.followers}`;
                followingId.textContent = `Following: ${gitData.following}`;
                pName.textContent = `Name: ${gitData.name || "N/A"}`;
                pLogin.textContent = `Login: ${gitData.login || "N/A"}`;
            } else {
                console.error("Error fetching data from GitHub");
            }
        };
        xml.send();
    }
}
