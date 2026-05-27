const FEATURED = ['SwimSchedule', 'Resonance-Design-Studio', 'movieList'];

async function fetchProjects() {
    let repoNames = FEATURED;

    if(document.title === "All Projects") {
        const res = await fetch('https://api.github.com/users/jstn-swm/repos');
        const reposList = await res.json();
        repoNames = reposList.map(r => r.name);
    }

    const repos = await Promise.all(repoNames.map(name => fetch(`https://api.github.com/repos/jstn-swm/${name}`, {
        headers: { 'Accept' : 'application/vnd.github.mercy-preview+json'}
    }).then(r=>r.json())));
    renderProjects(repos);
}

function renderProjects(repos) {
    const container = document.querySelector('.projects-container');
    repos.forEach(repo => {
        const card = document.createElement('div');
        const topics = repo.topics?.map(t=> `<span class="tag">${t}</span>`).join('') ?? '';
        const imageUrl = `https://media.githubusercontent.com/media/jstn-swm/${repo.name}/main/preview.png`;
        card.className = 'project-card';
        card.innerHTML = `
        <div class="project-image"><img src="${imageUrl}" alt="${repo.name} preview" onerror="this.style.display='none'"/></div>
        <div class="project-details">
            <h3>${repo.name}</h3>
            <p>${repo.description ?? "No Description."}</p>
            <div class="project-tags">${topics}</div>
            <a href="${repo.html_url}" class="project-link" target="_blank">View Project<i class="fas fa-arrow-right"></i></a>
        </div>
        `;
        container.appendChild(card);
    });
}
fetchProjects();