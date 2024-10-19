const baseUrl = 'https://api.github.com';
async function getGithubUserInfo(userName) {
    try {
        const response = await fetch(`${baseUrl}/users/${userName}`);
        const json = await response.json();
        // console.log(json);
        let x = document.querySelector('#github-img');
        x.src = `${json.avatar_url}`;
        x.classList.remove('skeleton')
        x.classList.remove('skeleton-text')
        x = document.querySelector('#github-profile-name')
        x.innerHTML = `<a href="https://github.com/${userName}"><span class="ubuntu-regular violet">${json.name}   (@${json.login})</span></a>`;
        x.classList.remove('skeleton')
        x.classList.remove('skeleton-text')
        x = document.querySelector('#github-profile-sub');
        x.innerHTML = `<a href="https://github.com/${userName}"><span class="ubuntu-regular violet">📍 ${json.location}</span></a>`;
        x.classList.remove('skeleton')
        x.classList.remove('skeleton-text')
        x = document.querySelector('#github-profile-sub2');
        x.innerHTML = `<a href="https://github.com/${userName}"><span class="ubuntu-regular violet">Followers: ${json.followers} | Following:  ${json.following}</span> </a>`;
        x.classList.remove('skeleton')
        x.classList.remove('skeleton-text')
        x = document.querySelector('#github-info-1');
        x.innerHTML = `<a href="https://github.com/${userName}"><span class="ubuntu-regular">Public Repos : ${json.public_repos}</span></a>`;
        x.classList.remove('skeleton')
        x.classList.remove('skeleton-text')
    } catch {
        // notify user of error
    }
}


const baseUrl2 = 'https://leetcode-api-faisalshohag.vercel.app';
async function getLeetcInfo(userName) {
    try {
        const response = await fetch(`${baseUrl2}/${userName}`);
        const json = await response.json();
        console.log(json);
        let x = document.querySelector('#leetc-img');
        x.src = `./resources/leetc.png`;
        x.classList.remove('skeleton')
        x.classList.remove('skeleton-text')
        x = document.querySelector('#leetc-profile-name')
        x.innerHTML = `<a href="https://leetcode.com/u/${userName}/"><span class="ubuntu-regular yellow ">${userName}   (@${userName})</span></a>`;
        x.classList.remove('skeleton')
        x.classList.remove('skeleton-text')
        x = document.querySelector('#leetc-profile-sub');
        x.innerHTML = `<a href="https://leetcode.com/u/${userName}/"><span class="ubuntu-regular yellow">Total Solved:  ${json.totalSolved}</span></a>`;
        x.classList.remove('skeleton')
        x.classList.remove('skeleton-text')
        x = document.querySelector('#leetc-profile-sub2');
        x.innerHTML = `<a href="https://leetcode.com/u/${userName}/"><span class="ubuntu-regular violet">Ranking ${json.ranking} </span></a>`;
        x.classList.remove('skeleton')
        x.classList.remove('skeleton-text')
        x = document.querySelector('#leetc-info-1');
        x.innerHTML = `<a href="https://leetcode.com/u/${userName}/"><span class="ubuntu-regular">Easy / Medium / Hard Solved : </span><span class="green ubuntu-regular">${json.easySolved}</span> / <span class="yellow ubuntu-regular">${json.mediumSolved}</span> / <span class="red ubuntu-regular">${json.hardSolved}</span> </a>`;
        x.classList.remove('skeleton')
        x.classList.remove('skeleton-text')
    } catch {
        // notify user of error
    }
}

let infos = document.getElementById('infos');
setTimeout(() => {
    infos.innerHTML = `

        <h1 class="alexandria-100 flow-up2"><span class="left">I'm</span></br><span style="font-size:5rem;color:cyan" class="color-text" >Aakarsh</span><p class="alexandria-100 flow-up2 max-width-a"><br>an Information Technology student passionate about coding and always eager to learn new things. I love working on projects and solving complex problems. Feel free to explore my work and see what I've been up to!  </p></h1>
        
    <div class="stats">
        <div class="stat-box" id = "github-stat" >
                <div class="logo-stat"><img src="https://github.com/favicon.ico" alt=""></div>
                <div class=" flex-align-side">
                    <img src="resources/icon-main.png" alt="" class="ico skeleton" id="github-img">
                    <div class="fill">
                        <div class="skeleton skeleton-text" id="github-profile-name"> </div>
                        <div class="skeleton skeleton-text" id="github-profile-sub"> </div>
                        <div class="skeleton skeleton-text" id="github-profile-sub2"> </div>
                    </div>
                </div>
                <div class="skeleton skeleton-text" id="github-info-1"> </div>
        
        </div >

        <div class="stat-box" id="leetcode-stat">
            <div class="logo-stat"><img src="https://leetcode.com/favicon.ico" alt=""></div>
            <div class="flex-align-side">
                <img src="resources/icon-main.png" alt="" class="ico skeleton" id="leetc-img">
                    <div class="fill">
                        <div class="skeleton skeleton-text" id="leetc-profile-name"> </div>
                        <div class="skeleton skeleton-text" id="leetc-profile-sub"> </div>
                        <div class="skeleton skeleton-text" id="leetc-profile-sub2"> </div>
                    </div>
            </div>
            <div class="skeleton skeleton-text" id="leetc-info-1"> </div>

        </div>
        </div >`
    setTimeout(() => {
        getGithubUserInfo('fluex4')
    }, 1000)
    getLeetcInfo("fluex4")
}, 1000)