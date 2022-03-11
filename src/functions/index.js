export const formatDate = (date) => {
    return new Intl.DateTimeFormat('fr-FR', {day: "numeric", month: "long", year: "numeric"}).format(new Date(date))
}