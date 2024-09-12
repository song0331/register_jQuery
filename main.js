// 아이디 정규식 함수
function idReg(id) {
  const re = /^(?=.*[A-Za-z])[A-Za-z\d]{6,16}$/;

  return re.test(id)
}

// 비밀번호 정규식 함수
function pwReg(password) {
  const re = /^(?=.*[a-zA-Z])(?=.*[0-9])(?=.*[!@#$%^*+=-]).{6,16}$/;

  return re.test(password);
}

// 이메일 정규식 함수
function emailReg(email) {
  const re = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

  return re.test(email);
}

// 이미 가입된 회원 정보
const user = [
  {
    userId: 'red123',
    userPassword: 'red123!@',
    userEmail: 'red@gmail.com'
  },
  {
    userId: 'green123',
    userPassword: 'green123!@',
    userEmail: 'green@gmail.com'
  },
  {
    userId: 'blue123',
    userPassword: 'blue123!@',
    userEmail: 'blue@gmail.com'
  }
]

// 아이디 유효성 검사
$('.user_id_input').on('input', function (e) {
  if (idReg($(e.target).val())) {
    $('#user_id_error').removeClass('show');
  } else if ($(e.target).val().length > 0) {
    $('#user_id_error').addClass('show');
  } else {
    $('#user_id_error').removeClass('show');
  }
})


// 아이디 중복 확인
$('.duplicate_id_btn').on('click', function () {
  let duplicate = false;

  user.forEach(function (item) {
    if (item.userId === $('.user_id_input').val()) {
      duplicate = true;
    }
  })

  if (!duplicate && $('.user_id_input').val().length > 0 && idReg($('.user_id_input').val())) {
    $('.duplicate_alert_container').css('visibility', 'visible');
    $('.duplicate_alert_text').text('사용할 수 있는 아이디 입니다.');
  } else {
    $('.duplicate_alert_container').css('visibility', 'visible');
    $('.duplicate_alert_text').text('사용할 수 없는 아이디 입니다.');
  }
})
// 아이디 중복 확인창 닫기
$('.duplicate_alert_btn').on('click', function () {
  $('.duplicate_alert_container').css('visibility', 'hidden')
})


// 비밀번호 유효성 검사
$('.user_password_input').on('input', function (e) {
  if (pwReg($(e.target).val())) {
    $('#user_password_error').removeClass('show');
  } else if ($(e.target).val().length > 0) {
    $('#user_password_error').addClass('show');
  } else {
    $('#user_password_error').removeClass('show');
  }
})


// 비밀번호 확인 유효성 검사
$('.user_password_check_input').on('input', function (e) {
  if ($(e.target).val() == $('.user_password_input').val()) {
    $('#user_password_check_error').removeClass('show');
  } else if ($(e.target).val().length > 0) {
    $('#user_password_check_error').addClass('show');
  } else {
    $('#user_password_check_error').removeClass('show');
  }
})


// 이메일 유효성 검사
$('.user_email_input').on('input', function (e) {
  if (emailReg($(e.target).val())) {
    $('#user_email_error').removeClass('show');
  } else if ($(e.target).val().length > 0) {
    $('#user_email_error').addClass('show');
  } else {
    $('#user_email_error').removeClass('show');
  }
})


// 이메일 중복 확인
$('.duplicate_email_btn').on('click', function () {
  let duplicate = false;

  user.forEach(function (item) {
    if (item.userEmail === $('.user_email_input').val()) {
      duplicate = true;
    }
  })

  if (!duplicate && $('.user_email_input').val().length > 0 && emailReg($('.user_email_input').val())) {
    $('.duplicate_email_alert_container').css('visibility', 'visible');
    $('.duplicate_email_alert_text').text('사용할 수 있는 이메일 입니다.');
  } else {
    $('.duplicate_email_alert_container').css('visibility', 'visible');
    $('.duplicate_email_alert_text').text('사용할 수 없는 이메일 입니다.');
  }
})
// 이메일 중복 확인창 닫기
$('.duplicate_email_alert_btn').on('click', function () {
  $('.duplicate_email_alert_container').css('visibility', 'hidden')
})


// 전체 동의 체크 함수
function allChecked(state){
  for(let i = 1; i < 5; i++){
    $(`#check_${i}`).prop('checked', state);
  }
}

// 전체 동의 체크
$('#agree_all').on('click', function () {
  if($('#agree_all').prop('checked')){
    allChecked(true);
    $('.join_btn').removeClass('disable_btn');
  }else{
    allChecked(false);
    $('.join_btn').addClass('disable_btn');
  }
})


// 이용약관 동의 체크
$('input[type = checkbox]').on('click', function (e) {

  // 필수 사항 개별 체크 상태
  if ($(e.target)[0].id == 'check_1' || $(e.target)[0].id == 'check_2' || $(e.target)[0].id == 'check_4') {
    $('#agree_all').prop('checked', false);
    $('.join_btn').addClass('disable_btn');
  }

  // 모두 체크된 상태
  if ($('#check_1').prop('checked') && $('#check_2').prop('checked') && $('#check_3').prop('checked') && $('#check_4').prop('checked')) {
    $('#agree_all').prop('checked', true);
    $('.join_btn').removeClass('disable_btn');
  }
  
  // 필수 사항만 체크된 상태
  if ($('#check_1').prop('checked') && $('#check_2').prop('checked') && $('#check_3').prop('checked') == false && $('#check_4').prop('checked')) {
    $('#agree_all').prop('checked', false);
    $('.join_btn').removeClass('disable_btn');
  }
})

