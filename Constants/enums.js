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
module.exports = {DayInWeek,Gender,PersonalStatus,ActivityCategory};
