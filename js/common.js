function getColor() {
  var i = 0;
  var colors = [
    '#1ffb81', '#1eee89', '#1ee192', '#1ed59a', 
    '#1ec8a3', '#1ebbac', '#1eafb4', '#1ea2bd', 
    '#1e95c6', '#1e89ce', '#1e7cd7', '#1e6fe0', 
    '#1e63e8', '#1e56f1', '#1e4afa', '#2d46f7',
    '#2d46f7', '#4942f0', '#5840ec', '#663ee9',
    '#753de6', '#833be2', '#9239df', '#a037dc',
    '#ae35d8', '#bd34d5', '#cb32d2', '#da30ce',
    '#e82ecb', '#f735bc', '#f73eb2', '#f73db1',
    '#f746a6'
  ]
  return function() {
    return colors[++i];
  }
}

var nextColor = getColor();

function getLabel(prefix, index) {
  if (index === 0) {
    return "Invalid profile";
  } else {
    return prefix + index;
  }
}

function getWapLabel(index) {
  if (index === 0) {
    return "non-WAP response";
  } else if (index === 1) {
    return "WAP response";
  }
}

var legendTmpl = "<table class=\"<%=name.toLowerCase()%>-legend\">\
                    <% for (var i=0; i < segments.length; i++){%> \
                    <tr>\
                      <td style=\"background-color:<%=segments[i].fillColor%>\">\
                      &nbsp;&nbsp;&nbsp;&nbsp;</td>&nbsp;\
                      <%if(segments[i].label){%>\
                        <td><%=segments[i].label%></td>\
                        <td><%=segments[i].value%></td>\
                        <td><%=((segments[i].value / document.name) * 100).toFixed(2) + '%'%></td>\
                      <%}%>\
                    </tr>\
                    <%}%>\
                  </table>";//((index * 10) * .1) / 10 Math.round(x / 100) * 100

var tooltipTmpl = "\
  <%if (label){%>\
    <%=label%>: \
  <%}%> <%= (value / document.name).toFixed(3) + '%' %>";

var helpers = Chart.helpers;
Chart.defaults.global.percentageInnerCutout = 50;
Chart.defaults.global.segmentStrokeWidth = 1;
Chart.defaults.global.legendTemplate = legendTmpl;
Chart.defaults.global.tooltipTemplate = tooltipTmpl;