// index.html에서 사용되는 JS
function move(){
    var target = document.getElementById('article2');
    var newOffset=target.offsetTop-100;
    window.scrollTo(0,newOffset);
}

//member.html에서 사용되는 JS
window.onload = function getMemberList(){
    var header = "<tr><th>Last Name</th><th>First Name</th><th>e-mail</th></tr>";
    $('#tblMemberList').html(header);

    //localstorage에서 회원정보 가져오기
    var jsonMemberList = localStorage.getItem('ych_memberList');
    var MemberList = JSON.parse(jsonMemberList);

    if(MemberList != null){
        MemberList.forEach(element => {
        var html = '<tr>'
                 + '<td>' + element.lastName + '</td>'
                 + '<td>' + element.firstName + '</td>'
                 + '<td>' + element.email + '</td>'
                 + '</tr>';
        $('#tblMemberList').append(html);
        });
    }
    
}

// join.html에서 사용하는 JS
function showPwd() {
    var pwd = document.getElementById("password");
    var pwdChk = document.getElementById("passwordCheck");
    if (pwd.type === "password") {
        pwd.type = "text";
        pwdChk.type = "text";
    } else {
        pwd.type = "password";
        pwdChk.type = "password";
    }
}

function validate(){
    //성 검사 : 한글2글자 이하만 허용. 
    var nameRegExp = /[가-힣]{1,2}/;

    if(!lastName.value){
        $('.lastName-alert').text('* 성을 입력하세요.');
        $('#lastName').css({
            'border-radius': '4px',
            'border': '2px solid #d93025',
            'outline' : 'none'
        });
        $('#lastName').focus();
        return false;
    }
    else{
        if(!(nameRegExp.test(lastName.value))){
            $('.lastName-alert').text('* 올바른 성을 입력하세요.');
            $('#lastName').css({
            'border-radius': '4px',
            'border': '2px solid #d93025',
            'outline' : 'none'
            });
            $('#lastName').focus();
            return false;
        }
        else{
            $('.lastName-alert').text('');
            $('#lastName').css({
            'border-radius': '4px',
            'border': '2px solid #cecaca',
            'outline' : 'none'
            });
        }
    }

    //이름 검사 : 한글2글자 이상만 허용. 
    var nameRegExp = /[가-힣]{1,}/;

    if(!firstName.value){
        $('.firstName-alert').text('* 이름을 입력하세요.');
        $('#firstName').css({
            'border-radius': '4px',
            'border': '2px solid #d93025',
            'outline' : 'none'
        });
        $('#firstName').focus();
        return false;
    }
    else{
        if(!(nameRegExp.test(firstName.value))){
            $('.firstName-alert').text('* 올바른 이름을 입력하세요.');
            $('#firstName').css({
            'border-radius': '4px',
            'border': '2px solid #d93025',
            'outline' : 'none'
        });
        $('#firstName').focus();
            return false;
        }
        else{
            $('.firstName-alert').text('');
            $('#firstName').css({
            'border-radius': '4px',
            'border': '2px solid #cecaca',
            'outline' : 'none'
            });
        }
    }

    //이메일 검사
    var emailRegExp = /^[0-9a-zA-Z]{4,12}@[a-zA-Z]{2,}\.[A-z]{2,}/;

    //localstorage에서 회원정보 가져오기
    var jsonMemberList = localStorage.getItem('ych_memberList');
    var MemberList = JSON.parse(jsonMemberList);

    if(!email.value){
        $('.email-alert').text('* 이메일을 입력하세요.');
        $('#email').css({
            'border-radius': '4px',
            'border': '2px solid #d93025',
            'outline' : 'none'
        });
        $('#email').focus();
        return false;
    }
    else if(!(emailRegExp.test(email.value))){
        $('.email-alert').text('* 올바르지 않은 이메일입니다.');
        $('#email').css({
            'border-radius': '4px',
            'border': '2px solid #d93025',
            'outline' : 'none'
        });
        $('#email').focus();
        return false;
    }
    else if(MemberList != null){
        var bool = true;
        MemberList.forEach(element => {
            var existEmail = element.email;
            console.log(existEmail);
            if(existEmail == email.value){
                bool = false;
                $('.email-alert').text('* 중복된 이메일입니다.');
                $('#email').css({
                    'border-radius': '4px',
                    'border': '2px solid #d93025',
                    'outline' : 'none'
                });
                $('#email').focus();
            }
        });
        if(bool!=true){
            return false;
        }
    }
    else{
        $('.email-alert').text('');
        $('#email').css({
        'border-radius': '4px',
        'border': '2px solid #cecaca',
        'outline' : 'none'
        });
    }
    

    //비밀번호 확인 검사
    //숫자/문자/특수문자/ 포함 형태의 8~15자리 이내의 암호 정규식 
    var pwdRegExp = /^[\w\W]{8,15}$/;
    if(!password.value){
        $('.password-alert').text('* 비밀번호를 입력하세요.');
        $('#password').css({
            'border-radius': '4px',
            'border': '2px solid #d93025',
            'outline' : 'none'
        });
        $('#password').focus();
        return false;
    }
    else{
        if(!(pwdRegExp.test(password.value))){
            $('.password-alert').text('* 비밀번호를 8~15자리로 입력하세요.');
            $('#password').css({
            'border-radius': '4px',
            'border': '2px solid #d93025',
            'outline' : 'none'
            });
            $('#password').focus();
            return false;
        }
        else{
            $('.password-alert').text('');
            $('#password').css({
            'border-radius': '4px',
            'border': '2px solid #cecaca',
            'outline' : 'none'
            });
        }
    }

    //비밀번호일치여부 검사
    if(!(password.value == passwordCheck.value)){
        $('.passwordCheck-alert').text('* 비밀번호가 일치하지 않습니다.');
        $('#passwordCheck').css({
        'border-radius': '4px',
        'border': '2px solid #d93025',
        'outline' : 'none'
        });
        $('#passwordCheck').focus();
        return false;
    }
    else{
        $('.passwordCheck-alert').text('');
        $('#passwordCheck').css({
        'border-radius': '4px',
        'border': '2px solid #cecaca',
        'outline' : 'none'
        });
    }

    var ych_member = {
        lastName: $('#lastName').val().trim(),
        firstName: $('#firstName').val().trim(),
        email: $('#email').val().trim(),
        password: $('#password').val().trim()
    }
    console.log(ych_member);

    var ych_memberList = JSON.parse(localStorage.getItem('ych_memberList'));
    console.log(ych_memberList);

    //첫 가입인 경우
    if(ych_memberList==null) ych_memberList=[];

    ych_memberList.push(ych_member);

    var jsonStr = JSON.stringify(ych_memberList);
    localStorage.setItem('ych_memberList',jsonStr);

    return true;
}

