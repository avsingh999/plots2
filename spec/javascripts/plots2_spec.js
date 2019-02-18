// = require comment_expand
// = require like
var editor;

describe("Plots2", function() {
  
  beforeEach(() => {
    fixture.preload('index.html', 'unlike.html', 'comment_expand.html');
  });

  // afterEach(() => {
  //   // Restore the default sandbox here
  //   sinon.restore();
  // });

  // it("makes a GET request when like button is clicked", function() {

  //   fixture.load('index.html');


  //   let ajaxStub = sinon.stub($, 'ajax').callsFake(function fakeFn(object) {
  //     let response = object.url === '/likes/node/1/create' ? '4' : 'none';
  //     let d = $.Deferred();
      
  //     if (response === '4') {
  //       d.resolve(response);
  //     } else {
  //       d.reject(response);
  //     }

  //     return d.promise();

	//   });

  //   $(document).ready(function() {
  //     $("#like-button-1").on('click', clicknotliked);
  //   });

  //   $("#like-button-1").click();
  //   // should trigger the following and our ajaxSpy should return a fake response of "4":
  //   /*var response;
  //   jQuery.getJSON("/likes/node/1/create").done(function(data){
  //       response = data;
  //   });*/

  //   // then triggering like.js code

  //   expect($('#like-count-1').html()).to.eql('10'); // passing
  //   expect($('#like-star-1')[0].className).to.eql('fa fa-star');
  //   ajaxStub.restore();
  // });


  // it("unlikes a request if already liked", function() {

  //   fixture.load('unlike.html');

  //   ajaxStub = sinon.stub($, 'ajax', function(object) {

	// 	if   (object.url == '/likes/node/1/delete') response = '-1';
	// 	else response = 'none';

	// 	// check this if you have trouble faking a server response:

	// 	var d = $.Deferred();
  //       if(response == '-1'){
	// 	    d.resolve(response);
  //       }
  //       else{
	// 	    d.reject(response);
  //       }

  //       return d.promise();

	// });

  //   $(document).ready(function(){
  //       $("#like-button-1").on('click', clickliked);
  //   });

  //   $("#like-button-1").trigger('click');
  //   expect($('#like-count-1').html()).to.eql('0');
  //   expect($('#like-star-1')[0].className).to.eql('fa fa-star-o');
  //   ajaxStub.restore();
  // });

  it("shows expand comment button with remaining comment count", function(){
    fixture.load('comment_expand.html');

    expand_comments(0);
    expect($('#answer-0-expand').html()).to.eql('View 2 previous comments');

    expand_comments(0);
    expect($('#answer-0-expand').css('display')).to.eql('none');
  });

  it("loads up i18n-js library properly", function() {
    expect(I18n.t('js.dashboard.selected_updates')).to.eql('Selected updates')
  });

});
