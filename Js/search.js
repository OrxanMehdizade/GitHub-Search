let contGit=document.getElementById('contenirGit');
let searchID=document.getElementById('searchId');
let img = document.getElementById("imgId");
searchID.addEventListener('input',showData);


function showData(){
    contGit.style.display="block"
    const gitName=searchID.value
    if(gitName){
        const xml= new XMLHttpRequest();
        xml.open("GET",`https://api.github.com/users/${gitName}`,true)
        xml.setRequestHeader("User-Agent", "YourAppName");

        xml.onload=function (){
            if(xml.status===200){
                console.log("Salam")
                const gitData=JSON.parse(xml.responseText);
                img.src = gitData.avatar_url;
                gitUrl.textContent=`Url to github: ${gitData.html_url}`;
                blogId.textContent=`Blog: ${gitData.blog || "N/A"}`;
                cityId.textContent=`City: ${gitData.location || "N/A"}`;
                emailId.textContent=`Email: ${gitData.email || "N/A"}`;
                followersId.textContent=`Followers: ${gitData.followers}`;
                followingId.textContent=`Following: ${gitData.following}`;
                pName.textContent=`Name:\t ${gitData.Name || "N/A"}`;
                pLogin.textContent=`Login:\t ${gitData.login || "N/A"}`;

            }
            else{
                console.error("Error fetching data from GitHub");
            }

        }
        xml.send();
    }
}