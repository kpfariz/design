// Initialize all countdown timers
document.addEventListener('DOMContentLoaded', function() {
    const countdowns = document.querySelectorAll('.countdown');
    
    countdowns.forEach(countdown => {
        const endTime = countdown.getAttribute('data-end-time');
        const endDate = new Date(endTime).getTime();
        
        // Update the countdown every second
        const timer = setInterval(function() {
            const now = new Date().getTime();
            const distance = endDate - now;
            
            // If the countdown is finished
            if (distance < 0) {
                // Show current time instead of expired message
                const currentTime = new Date();
                const hours = currentTime.getHours().toString().padStart(2, '0');
                const minutes = currentTime.getMinutes().toString().padStart(2, '0');
                const seconds = currentTime.getSeconds().toString().padStart(2, '0');
                
                countdown.innerHTML = `
                    <div class="current-time">
                        <span class="hours">${hours}</span>:
                        <span class="minutes">${minutes}</span>:
                        <span class="seconds">${seconds}</span>
                    </div>
                `;
                return; // Continue updating the time in the next interval
            }
            
            // Time calculations
            const days = Math.floor(distance / (1000 * 60 * 60 * 24));
            const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
            const seconds = Math.floor((distance % (1000 * 60)) / 1000);
            
            // Update the display
            countdown.querySelector('.days').textContent = days.toString().padStart(2, '0');
            countdown.querySelector('.hours').textContent = hours.toString().padStart(2, '0');
            countdown.querySelector('.minutes').textContent = minutes.toString().padStart(2, '0');
            countdown.querySelector('.seconds').textContent = seconds.toString().padStart(2, '0');
            
        }, 1000);
    });
});