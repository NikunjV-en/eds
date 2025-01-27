
async function appendHTML(file, target) { try { const response = await fetch(file); if (!response.ok) throw new Error('Network response was not ok'); const content = await response.text(); const tempDiv = document.createElement('div'); tempDiv.innerHTML = content; document.getElementById(target).appendChild(tempDiv); } catch (error) { console.error('Error fetching the HTML file:', error); } }

export default async function decorate(block) {
    console.log("Inide decorate");

    appendHTML('video2/video2.html', 'container');
    // includeHTML('./video2.html');
    const mainContainer = document.createElement('div');
    const container = document.createElement('div'); container.className = 'container'; const img = document.createElement('img'); img.src = 'image.jpg'; img.alt = 'Nexa Create Inspire'; img.className = 'image'; const title = document.createElement('div'); title.className = 'title'; title.textContent = 'CREATE INSPIRE'; const description = document.createElement('div'); description.className = 'description'; description.textContent = 'NEXA CREATE. INSPIRE. NEXA embraces the relentless spirit of creators that never stops exploring, innovating, influencing and experimenting.'; const button = document.createElement('a'); button.href = '#'; button.className = 'button'; button.textContent = 'KNOW MORE'; container.appendChild(img); container.appendChild(title); container.appendChild(description); container.appendChild(button);
    mainContainer.appendChild(container);
    document.body.appendChild(mainContainer);
}