/* Like button functionality of nodes */

// functionalize appearance changes
function clickliked() {
  var node_id = $(this).attr('node-id');
  $('#like-button-' + node_id).off('click', clickliked);
  changeLikeStatus(node_id, "/delete");
}

function clicknotliked() {
  var node_id = $(this).attr('node-id');
  $('#like-button-' + node_id).off('click', clicknotliked);
  changeLikeStatus(node_id, "/create");
}

function changeLikeStatus(node_id, method) {
  let msg = method === "/delete" ? "Unliked!" : "Liked!";
  $.getJSON("/likes/node/" + node_id + `${method}`)
    .then(function(resp) {
      notyNotification('mint', 3000, 'success', 'topRight', `${msg}`);
      updateLikeCount(parseInt(resp), node_id);
      renderLikeStar(parseInt(resp), node_id);
    })
    .then(function(resp) {
      let method1 = method === "/delete" ? clicknotliked : clickliked
      $('#like-button-' + node_id).on('click', method1);
    });
}

function updateLikeCount(value, node_id) {
  var count = $('#like-count-' + node_id).html();
  count = parseInt(count);
  count += value;
  $('#like-count-' + node_id).html(count);
}

// where fa fa-star-o is clear star (indicating you are not currently liking)
function renderLikeStar(value, node_id) {
  let name = value === -1 ? "fa fa-star-o" : "fa fa-star"
  $('#like-star-' + node_id)[0].className = name;
}