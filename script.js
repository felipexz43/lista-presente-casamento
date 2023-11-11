document.addEventListener("DOMContentLoaded", function() {
    const giftList = document.getElementById("gift-list");
    const giftNameInput = document.getElementById("gift-name");
    const addGiftButton = document.getElementById("add-gift");

    addGiftButton.addEventListener("click", function() {
        const giftName = giftNameInput.value.trim();
        if (giftName !== "") {
            const newGift = document.createElement("li");
            newGift.textContent = giftName;
            giftList.appendChild(newGift);
            giftNameInput.value = "";
        }
    });
});