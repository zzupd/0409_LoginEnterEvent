$(function(){

    $("button").click(function(){
        var uID = $("#uID").val().trim();
        // 입력된 ID value 가져오기 및 공백제거(메서드 체인 적용)
        var uPW = $("#uPW").val().trim();
        var regExpID = /[^a-z|A-Z|0-9|_]/;
                 // ID 정규표현식 유효성검사조건
        var regExpPW = /[^a-z|A-Z|0-9|_#]/;
                 // PW 정규표현식 유효성검사조건

        if (uID == ""   ||    regExpID.test(uID)) {
            alert("아이디를 올바르게 입력해주세요.");
            $("#uID").focus().val("");   // 포커스설정 및 공백제거

        } else if (uPW == "" || regExpPW.test(uPW)) {
            alert("비밀번호를 올바르게 입력해주세요.");
            $("#uPW").focus().val("");

        } else {
                alert("OK!");   // ID, PW 모두 정상적인 값이 입력됨

        }

    });

});
