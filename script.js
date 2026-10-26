// your code here
<script>
        const form = document.getElementById("myForm");
        const url = document.getElementById("url");

        form.addEventListener("submit", function(event) {
            event.preventDefault();

            const name = document.getElementById("name").value;
            const year = document.getElementById("year").value;

            url.textContent = `https://localhost:8080/?name=${encodeURIComponent(name)}&year=${encodeURIComponent(year)}`;
        })