// BÀI TẬP VỀ NHÀ 01 - SẮP XẾP SỐ NGUYÊN
function Submit_01(){

    // B1: Xác định đầu vào
    // - so1 
    // - so2
    // - so3
    var so1 = +document.getElementById('so1').value;
    var so2 = +document.getElementById('so2').value;
    var so3 = +document.getElementById('so3').value;

    var soLonNhat;
    var soLonNhi;
    var soNhoNhat;

    
    // B2: Công thức tính số lớn nhất, só nhỏ nhất, số ở giữa
    // soLonNhat là số lớn hơn 2 số còn lại
    // soNhoNhat là số nhỏ hơn 2 số còn lại
    // soLonNhi = (Tổng 3 số) - soLonNhat - soNhoNhat
    if (so1 >= so2 && so1 >= so3){
        soLonNhat = so1
    }
    if (so2 >= so1 && so2 >= so3){
        soLonNhat = so2
    }
    if (so3 >= so1 && so3 >= so2){
        soLonNhat = so3
    }
    
    if (so1 <= so2 && so1 <= so3){
        soNhoNhat = so1
    }
    if (so2 <= so1 && so2 <= so3){
        soNhoNhat = so2
    }
    if (so3 <= so1 && so3 <= so2){
        soNhoNhat = so3
    }

    soLonNhi = (so1+so2+so3) - soLonNhat - soNhoNhat;

    // B3: In kết quả đầu ra
    document.getElementById('result_01').innerHTML = `
    <div class ="result">
    <span>Theo thứ tự từ nhỏ đến lớn: </span> 
    <b> ${soNhoNhat}<span>, </span>${soLonNhi}<span>, </span>${soLonNhat}</b>
    </div>
    `

};


// BÀI TẬP VỀ NHÀ 02 - TÍNH GIÁ TRỊ TRUNG BÌNH

function Submit_02(){
    // B1: Xác định đầu vào
    // - so1
    // - so2
    // - so3
    // - so4
    // - so5
    var soA1 = +document.getElementById('soA1').value;
    var soA2 = +document.getElementById('soA2').value;
    var soA3 = +document.getElementById('soA3').value;
    var soA4 = +document.getElementById('soA4').value;
    var soA5 = +document.getElementById('soA5').value;

    var diemTrungBinh;

    // B2: Công thức tính giá trị trung bình
    // - trungbinh = Tong/n
    diemTrungBinh = (soA1+soA2+soA3+soA4+soA5)/5;

    // B3: In kết quả đầu ra
    document.getElementById('result_02').innerHTML = `
    <div class ="result">
        <span>Giá trị trung bình của các số trên là:</span><b> ${diemTrungBinh} </b>
    </div>
    `

}



// BÀI TẬP VỀ NHÀ 03 - ĐẾM SỐ CHẴN LẺ
function Submit_03(){

    // B1: Xác định đầu vào
    // - so1 
    // - so2
    // - so3
    var soB1 = +document.getElementById('soB1').value;
    var soB2 = +document.getElementById('soB2').value;
    var soB3 = +document.getElementById('soB3').value;

    var chan = 0;
    var le = 0;
    
    // B2: Công thức đếm số chẵn lẻ
    // số lẻ là số chia 2 dư 1 (%2 = 1)
    // số chẳn là số chia hết cho 2 (%2 = 0)
    if (soB1%2 == 1){
        le += 1;
    } else {
        chan += 1;
    }

    if (soB2%2 == 1){
        le += 1;
    } else {
        chan += 1;
    }

    if (soB3%2 == 1){
        le += 1;
    } else {
        chan += 1;
    }
    
    // B3: In kết quả đầu ra
    document.getElementById('result_03').innerHTML = `
    <div class ="result">
        <span>Có </span> <b>${chan}<span> số chẵn </span></b>
        <br>
        <span>Có </span> <b>${le}<span> số lẻ </span></b>
    </div>
    `

};


// BÀI TẬP VỀ NHÀ 04 - XÁC ĐỊNH TAM GIÁC

function Submit_04(){
    // B1: Xác định đầu vào
    // - canhA
    // - canhB
    // - canhC

    var canhA = +document.getElementById('canhA').value;
    var canhB = +document.getElementById('canhB').value;
    var canhC = +document.getElementById('canhC').value;

    var canDeu = " ";
    var vuong  = " ";


    // B2: Cách xác định tam giác
    // - Tam giác đều: canhA = canhB = canhC
    // - Tam giác cân: canhA = canh B
    // - Tam giác vuông: canhA*canhA = canhB*canhB + canhC*canhC
    // - Nếu tam giác đều thì không gọi là tam giác cân
    // - Nếu tam giác vừa vuông vừa cân thì gọi là tam giác vuông cân
    if (canhA > canhB + canhC ||
        canhB > canhA + canhC ||
        canhC > canhB + canhA){
        document.getElementById('result_04').innerHTML = `
        <div class ="result">
            <span> Xin nhập lại, đây không phải là một tam giác</span>
        </div>
        `  
    } else {

    if (canhA == canhB || canhB == canhC || canhC == canhA){
        canDeu = "cân";
    };

    if (canhA == canhB && canhB == canhC){
        canDeu = "đều";
    };

    if (canhA*canhA == (canhB*canhB + canhC*canhC) || 
        canhB*canhB == (canhA*canhA + canhC*canhC) ||
        canhC*canhC == (canhA*canhA + canhB*canhB) ){
        vuong = "vuông";
        };

    // B3: In kết quả đầu ra
    document.getElementById('result_04').innerHTML = `
    <div class ="result">
        <span>Đây là tam giác </span> <b>${vuong} ${canDeu}</b>
    </div>
    `
    }
}

