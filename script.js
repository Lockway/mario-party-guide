fetch('minigames.json')
  .then(response => response.json())
  .then(data => {
    const container = document.getElementById('gallery-container');

    // type별로 묶기
    const grouped = {};
    data.forEach(game => {
      if (!grouped[game.type]) grouped[game.type] = [];
      grouped[game.type].push(game);
    });

    // type별로 섹션 생성
    for (const type in grouped) {
      const section = document.createElement('section');

      // 제목
      const h2 = document.createElement('h2');
      h2.textContent = `${type} 미니게임`;
      section.appendChild(h2);

      // 갤러리
      const ul = document.createElement('ul');
      ul.className = 'minigame-gallery';

      grouped[type].forEach(game => {
        const li = document.createElement('li');
        li.innerHTML = `
          <a href="minigames/${game.id}.html">
            <img src="images/${game.id}.jpg" alt="${game.en}">
            <span>${game.kr}<br>(${game.en})</span>
          </a>
        `;
        ul.appendChild(li);
      });

      section.appendChild(ul);
      container.appendChild(section);
    }
  });
