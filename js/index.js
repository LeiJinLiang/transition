var h1=document.createElement('h1');
h1.textContent='transition: property duration timing-function';
document.body.appendChild(h1);
var h2_property=document.createElement('h2');
h2_property.textContent='transition-property:background-color';
var h2_duration=document.createElement('h2');
h2_duration.textContent='transition-durations: 1s';
var h2_timing_function=document.createElement('h2');
h2_timing_function.textContent='linear';
document.body.appendChild(h2_property);
document.body.appendChild(h2_duration);
document.body.appendChild(h2_timing_function);