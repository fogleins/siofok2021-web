var VoteType;
(function (VoteType) {
    VoteType[VoteType["drinkAdd"] = 0] = "drinkAdd";
    VoteType[VoteType["drinkRemove"] = 1] = "drinkRemove";
    VoteType[VoteType["drinkAddSuggestion"] = 2] = "drinkAddSuggestion";
    VoteType[VoteType["other"] = 3] = "other";
})(VoteType || (VoteType = {}));
var BootstrapColors;
(function (BootstrapColors) {
    BootstrapColors["primary"] = "#007aff";
    BootstrapColors["secondary"] = "#6c757d";
    BootstrapColors["success"] = "#198754";
    BootstrapColors["warning"] = "#ffc107";
    BootstrapColors["danger"] = "#dc3545";
})(BootstrapColors || (BootstrapColors = {}));
function submitVote(userID, drinkID, action) {
    $.ajax({
        "url": "vote_handler.php",
        "type": "GET",
        "timeout": 5000,
        "dataType": "json",
        "data": {
            action: action,
            userId: userID,
            drinkId: drinkID
        },
        "success": function (data) {
            if (data.success) {
                if (action == VoteType.drinkAdd) {
                    Toast.showToast("Sikeres művelet", "Szavazatod sikeresen rögzítésre került.", BootstrapColors.success);
                    console.log("vote successfully saved");
                }
                else if (action == VoteType.drinkRemove) {
                    Toast.showToast("Sikeres művelet", "Szavazatod sikeresen törlésre került.", BootstrapColors.success);
                    console.log("vote successfully removed");
                }
            }
        },
        "error": function (err) {
            Toast.showToast("Hiba", "A művelet során hiba lépett fel.", BootstrapColors.danger);
            console.log("AJAX error in request: " + JSON.stringify(err, null, 2));
        }
    });
}
$(document).ready(function () {
    let navLinks = document.getElementsByClassName("nav-link");
    for (let i = 0; i < navLinks.length; i++) {
        let navLink = navLinks[i];
        if (navLink.href == window.location.href) {
            navLink.classList.add("active", "text-primary");
        }
        else if (navLink.classList.contains("active")) {
            navLink.classList.remove("active");
        }
    }
});
//# sourceMappingURL=scripts.js.map