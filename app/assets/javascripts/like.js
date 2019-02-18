/* Like button functionality of nodes */

// functionalize appearance changes
function changelikecount(value, node_id) {
  window.value = value;
  window.node_id = node_id;

  var count = $('#like-count-' + node_id).html();
  window.count = count;
  // strip parens and convert to number
  count = parseInt(count);
  count += value;
  window.count2 = count;
  // push value back out
  $('#like-count-' + node_id).html(count);

}

function renderLikeStar(value, node_id) {
  let name;
  value === -1 ? name = "fa fa-star" : name = "fa fa-star-o"
  $('#like-star-' + node_id)[0].className = name;
}


function changeLikeStatus(node_id, method) {
  // method should be passed in
  let msg;
  method === "/delete" ? msg = "Unliked!" : msg = "Liked!";
  window.msg = msg;
  console.log(window.msg);
  $.getJSON("/likes/node/" + node_id + `${method}`).then(function(response) {
    notyNotification('mint', 3000, 'success', 'topRight', `${msg}`);
    changelikecount(parseInt(response), node_id);
    renderLikeStar(parseInt(response), node_id);
  }).then(function(response) {
    let method1 = method === "/delete" ? clicknotliked : clickliked
    let method2 = method1 === clickliked ? clicknotliked : clickliked
    $('#like-button-' + node_id).on('click', method1);
    return $('#like-button-' + node_id).prop('disabled', false)
  });
  
}

function clickliked() {
  var node_id = $(this).attr('node-id');
  $('#like-button-' + node_id).prop('disabled', true)
  $('#like-button-' + node_id).off('click', clickliked);
  $('#like-button-' + node_id).off('click', clicknotliked);
  // notyNotification('mint', 3000, 'success', 'topRight', 'Unliked!');
  changeLikeStatus(node_id, "/delete");

  // $('#like-button-' + node_id).on('click', clickliked);
  // // $('#like-button-' + node_id).off('click', clicknotliked);
  // $('#like-button-' + node_id).prop('disabled', false)
}

function clicknotliked() {

  var node_id = $(this).attr('node-id');
  $('#like-button-' + node_id).prop('disabled', true);
  $('#like-button-' + node_id).off('click', clickliked);
  $('#like-button-' + node_id).off('click', clicknotliked);
  changeLikeStatus(node_id, "/create");

//   $.getJSON("/likes/node/" + node_id + "/create")
//    .done(function(response) {
//     notyNotification('mint', 3000, 'success', 'topRight', 'Liked!');
//     showliked(node_id);
//     changelikecount(parseInt(response), node_id);
//      window.response = response;
    // $('#like-button-' + node_id).on('click', clicknotliked);
    // $('#like-button-' + node_id).off('click', clickliked);
    // $('#like-button-' + node_id).prop('disabled', false)
}
//   });

// }
