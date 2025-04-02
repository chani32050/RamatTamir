const DayInWeek = Object.freeze({
    SUNDAY: 'sunday',
    MONDAY: 'monday',
    TUESDAY: 'tuesday',
    WEDNESDAY: 'wednesday',
    THURSDAY: 'thursday',
    FRIDAY: 'friday',
    SHABOS: 'shabos',
});

const Gender = Object.freeze({
    MALE:'male', 
    FEMALE:'female'
});

const PersonalStatus = Object.freeze({
    SINGLE:'single', 
    MARRIED:'married', 
    DIVORCED:'divorced', 
    WIDOWED:'widowed'
});

const ActivityCategory = Object.freeze({
    MUSIC:'Music', 
    SPORTS:'Sports', 
    LECTURE:'Lecture', 
    WORKSHOP:'Workshop', 
    THEATER:'Theater', 
    OTHER:'Other'
});
const Roles=Object.freeze({
    ADMIN: 'manager',
    ELDERLY: 'elderly',
    CLEANER: 'cleaner',
    RELATIVE: 'relative'
});
module.exports = {DayInWeek,Gender,PersonalStatus,ActivityCategory,Roles};
