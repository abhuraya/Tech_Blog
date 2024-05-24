module.exports = {
    format_date: (date) => {
        // Format date as MM/DD/YYYY
        return date.toLocaleDateString();
    },
    format_amount: (amount) => {
        //format largge numbers with commas
        return parseInt(amount).toLacaleString();
    },
}