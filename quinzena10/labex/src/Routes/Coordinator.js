export const goToHomePage = (history) => {
    history.push("/");
};

export const goToAppFormPage = (history) => {
    history.push("/subscribe");
};

export const goToLoginPage = (history) => {
    history.replace("/login");
};

export const goToTripDetailsPage = (history) => {
    history.push("/trip-details");
};

export const goToCreateTripPage = (history) => {
    history.push("/trip-create");
};

