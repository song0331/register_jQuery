function idReg(id) {
  const re = /^(?=.*[A-Za-z])[A-Za-z\d]{6,16}$/;

  return re.test(id)
}

function pwReg(password) {
  const re = /^(?=.*[a-zA-Z])(?=.*[0-9])(?=.*[!@#$%^*+=-]).{6,16}$/;
  
  return re.test(password);
}

function emailReg(email) {
  const re = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

  return re.test(email);
}

const user = [
  {
    userId : 'red123',
    userPassword : 'red123!@',
    userEmail : 'red@gmail.com'
  },
  {
    userId : 'green123',
    userPassword : 'green123!@',
    userEmail : 'green@gmail.com'
  },
  {
    userId : 'blue123',
    userPassword : 'blue123!@',
    userEmail : 'blue@gmail.com'
  }
]

// 아이디 유효성 검사
$('.user_id_input').on('input', function(e){
  if (idReg($(e.target).val())) {
    $('#user_id_error').removeClass('show');
  } else if ($(e.target).val().length > 0) {
    $('#user_id_error').addClass('show');
  } else {
    $('#user_id_error').removeClass('show');
  }
})


// 아이디 중복 확인
$('.duplicate_id_btn').on('click', function(){
  let duplicate = false;

  user.forEach(function(item){
    if(item.userId === $('.user_id_input').val()){
      duplicate = true;    
    }
  })

  if(!duplicate && $('.user_id_input').val().length > 0){
    $('.duplicate_alert_container').css('visibility', 'visible');
    $('.duplicate_alert_text').text('사용할 수 있는 아이디 입니다.');
  }else{
    $('.duplicate_alert_container').css('visibility', 'visible');
    $('.duplicate_alert_text').text('사용할 수 없는 아이디 입니다.');
  }
})
$('.duplicate_alert_btn').on('click', function(){
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
$('.user_email_input').on('input', function(e){
  if (emailReg($(e.target).val())) {
    $('#user_email_error').removeClass('show');
  } else if ($(e.target).val().length > 0) {
    $('#user_email_error').addClass('show');
  } else {
    $('#user_email_error').removeClass('show');
  }
})