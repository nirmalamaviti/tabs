document.addEventListener('DOMContentLoaded', function() {
    const tabs = document.querySelectorAll('.btn');
    const tabContents = document.querySelectorAll('.content');

    tabs.forEach(tab => {
        tab.addEventListener('click', function() {
            const tabId = this.getAttribute('data-id');

            tabs.forEach(tab => {
                tab.classList.remove('active');
            });

            tabContents.forEach(content => {
                content.classList.remove('active');
            });

            this.classList.add('active');
            document.getElementById(tabId).classList.add('active');
        });
    });
});
