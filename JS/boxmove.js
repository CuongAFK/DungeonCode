

class object {
    constructor(x, y, tdx, tdy) {
        this.x = x;
        this.y = y;
        this.tdx = tdx;
        this.tdy = tdy;
    }
}

class main extends object {
    constructor(x, y, tdx, tdy, hh) {
        super(x, y, tdx, tdy);
        this.hh = hh;
    }
}

class chest extends object {
    constructor(x, y, tdx, tdy) {
        super(x, y, tdx, tdy);
    }

}

class dragon extends object {
    constructor(x, y, tdx, tdy) {
        super(x, y, tdx, tdy);
    }
}

// Hàm mở hộp thoại
function openModal() {
    document.getElementById("myModal").style.display = "block";
}

// Hàm đóng hộp thoại
function closeModal() {
    document.getElementById("myModal").style.display = "none";
}

// Đóng hộp thoại khi nhấp bên ngoài nó
window.onclick = function (event) {
    var modal = document.getElementById("myModal");
    if (event.target == modal) {
        modal.style.display = "none";
    }
}

function toggleButtons(shouldDisable) {
    const buttons = document.querySelectorAll('#bt_control button:not(#reset_code)');
    buttons.forEach(button => {
        if (shouldDisable) {
            button.classList.add('disabled-button');
            button.disabled = true;
        } else {
            button.classList.remove('disabled-button');
            button.disabled = false;
        }
    });
}


var maplv = 0;




const hom = new chest(14, 0, 0, 5);
const key = new chest(10, 10, 0, 5);
const boss = new dragon(-72, -70, 0, 0);
const vt = new main(15, 2, 0, 0, 2);

const trum = document.getElementById('rong');

const ch = document.getElementById('chest');
const chiakhoa = document.getElementById('key');

const td = document.getElementById('art');

ch.style.paddingTop = hom.y + 'px';



lvmap(maplv);

var max;

function lvmap(m) {
    const ch = document.getElementById('chest');
    switch (m) {
        case 0:
            max = 5;
            ch.style.paddingLeft = hom.x + hom.tdx * 50 + 'px'; // Thay đổi giá trị của padding-top
            ch.style.paddingTop = hom.tdy * 50 + 'px'; // Thay đổi giá trị của padding-top
            showCustomAlert("Level 1: Nhặt Rương", "../IMG/ruong.png");
            break;
        case 1:
            max = 11;
            hom.tdx = 7;
            hom.tdy = 3;
            ch.style.paddingLeft = hom.x + hom.tdx * 50 + 'px'; // Thay đổi giá trị của padding-top
            ch.style.paddingTop = hom.tdy * 50 + 'px'; // Thay đổi giá trị của padding-top
            showCustomAlert("Level 2: Nhặt Rương", "../IMG/ruong.png");
            break;
        case 2:
            max = 7;
            hom.tdx = 9;
            hom.tdy = 8;
            ch.style.paddingLeft = hom.x + hom.tdx * 50 + 'px'; // Thay đổi giá trị của padding-top
            ch.style.paddingTop = hom.tdy * 50 + 'px'; // Thay đổi giá trị của padding-top
            showCustomAlert("Level 3: Nhặt Rương", "../IMG/ruong.png");
            break;
        case 3:
            // ch.style.display = "none";
            // const kc = document.getElementById("view_out").querySelector("table");
            // const template = document.getElementById("kimcuong-template");

            // Số lượng kim cương cần nhân bản
            // const numKimCuong = 5;

            // for (let i = 0; i < numKimCuong; i++) {
            //     const clone = template.cloneNode(true);
            //     clone.style.display = 'inline'; // Hiển thị thẻ img
            //     clone.id = "kimcuong-" + i; // Đặt id duy nhất cho mỗi thẻ img
            //     kc.appendChild(clone);
            // }
            // const kc = document.getElementById("view_out").querySelector("table");
            // const img = document.createElement("img");
            // img.src = "../IMG/icon_diamond.png"; // Địa chỉ ảnh
            // img.alt = "Kim Cương";
            // img.id = "kimcuongImg"; // Thêm id cho hình
            // img.style.width="10px"
            // kc.appendChild(img);
            checklose = false;
            checkkey = false;
            max = 19;
            boss.tdx = 8;
            boss.tdy = 2;

            hom.tdx = 7;
            hom.tdy = 6;
            key.tdx = 9;
            key.tdy = 8;
            chiakhoa.style.display = "block";
            chiakhoa.style.paddingLeft = key.x + key.tdx * 50 + 'px'; // Thay đổi giá trị của padding-top
            chiakhoa.style.paddingTop = key.y + key.tdy * 50 + 'px'; // Thay đổi giá trị của padding-top

            ch.src = `../IMG/door.png`;
            document.getElementById('cdr').style.display = "block";
            ch.style.paddingLeft = hom.x + hom.tdx * 50 + 'px'; // Thay đổi giá trị của padding-top
            ch.style.paddingTop = 15 + hom.tdy * 50 + 'px'; // Thay đổi giá trị của padding-top

            trum.style.display = "block";
            trum.style.paddingLeft = boss.x + boss.tdx * 50 + 'px';
            trum.style.paddingTop = boss.y + boss.tdy * 50 + 'px';
            doubleTB();


            break;

        case 4:
            maplv=0;
            lvmap(maplv);
            break;
    }

}

async function doubleTB() {
    await showCustomAlert("Level 4: Dùng chìa khóa mở cửa!", "../IMG/key.png");
    await showCustomAlert("Cảnh báo boss xuất hiện!", "../IMG/rong1.png");
    await showCustomAlert("Hãy né đường đi của con rồng!", "../IMG/duongdicuarong.png");
}

var checklose = false;
var checkkey = false;

function checkwin() {
    if (maplv < 3) {
        if (hom.tdx === vt.tdx && hom.tdy === vt.tdy) {
            pastlv();
            return;
        }
    }

    if (maplv === 3) {
        if ((vt.tdy === 2 || vt.tdy === 7) && vt.tdx > 2 && vt.tdx < 9) {
            console.log('close!'); checklose = true;
        }
        if (vt.tdy === 4 && vt.tdx > 4 && vt.tdx < 9) {
            console.log('close!'); checklose = true;
        }
        if ((vt.tdx === 3 && vt.tdy > 1 && vt.tdy < 8) || (vt.tdx === 8 && vt.tdy > 3 && vt.tdy < 8)) {
            console.log('close!'); checklose = true;
        }

        if (vt.tdx === 9 && vt.tdy === 8) {
            checkkey = true;
            chiakhoa.style.display = "none";

            console.log('checkkey');
        }
        if (vt.tdx === 7 && vt.tdy === 6 && checkkey) {
            document.getElementById('cdr').style.display = "none";
            pastlv();
        }

        // if(checkkey){
        //     chiakhoa.style.paddingLeft = key.x + vt.tdx * 50 + 'px'; // Thay đổi giá trị của padding-top
        //     chiakhoa.style.paddingTop = key.y + vt.tdy * 50 + 'px'; // Thay đổi giá trị của padding-top
        // }


    }
}

async function lose() {
    await showCustomAlert("You Lose", "../IMG/rong1.png");
    reset();
    lvmap(maplv);
}




//khi dat dieu kien qua man
async function pastlv() {
    switch (maplv) {
        case 0:
            await showCustomAlert("Successfull!", "../IMG/ruong.png");
            await showCustomAlert("New Cart!", "../IMG/ruong_mo.png");
            maplv++;
            lvmap(maplv);
            break;
        case 1:
            await showCustomAlert("Successfull!", "../IMG/ruong.png");
            await showCustomAlert("New Cart!", "../IMG/ruong_mo.png");
            maplv++;
            lvmap(maplv);
            break;
        case 2:
            await showCustomAlert("Successfull!", "../IMG/ruong.png");
            await showCustomAlert("Thông tin đường đi của con rồng!", "../IMG/ruong_mo.png");
            maplv++;
            lvmap(maplv);
            break;
        case 3:
            await showCustomAlert("Successfull!", "../IMG/door.png");
            await showCustomAlert("Cảm ơn bạn đã chơi, chúng tôi sẽ cập nhật màn mới sau!", "../IMG/coming_soon.png");
            maplv++;
            lvmap(maplv);
            break;
    }
    updatebutton();
    removeall();
}

function updatebutton() {
    onbutton();
    onbutton();
}

function reset_code() {
    removeall();
    reset();
    toggleButtons(false);
    addButtons();
    console.log("reset code!");
}

function showCustomAlert(message, imageUrl) {
    return new Promise((resolve) => {
        document.getElementById('overlay').style.display = 'block';
        document.getElementById('customAlert').style.display = 'block';
        document.getElementById('alertText').innerText = message;
        document.getElementById('alertImage').src = imageUrl;

        document.getElementById('customAlert').querySelector('button').onclick = function () {
            document.getElementById('overlay').style.display = 'none';
            document.getElementById('customAlert').style.display = 'none';
            resolve();
        };
    });
}








td.style.paddingLeft = vt.x + 'px'; // Thay đổi giá trị của padding-top
td.style.paddingTop = vt.y + 'px'; // Thay đổi giá trị của padding-top

// var hh = 2; //huong
var vl = 0; //lap
var di = 0;
var intervalId; // Lưu trữ ID của setInterval 




async function runmain(bid) {
    let stack = [];
    let i = bid;
    toggleButtons(true);
    addButtons();
    while (i < boxes.length) {
        await delay(200); // Delay giữa các hộp
        console.log();

        switch (boxes[i].codeid) {
            // Đi thẳng
            case 1:
                const vat = 50;
                switch (vt.hh) {
                    case 1:
                        if (vt.tdx > 0) {
                            vt.x -= vat;
                            td.style.paddingLeft = vt.x + 'px';
                            vt.tdx--;
                        }
                        break;
                    case 2:
                        if (vt.tdy < 9) {
                            vt.y += vat;
                            td.style.paddingTop = vt.y + 'px';
                            vt.tdy++;
                        }
                        break;
                    case 3:
                        if (vt.tdx < 9) {
                            vt.x += vat;
                            td.style.paddingLeft = vt.x + 'px';
                            vt.tdx++;
                        }
                        break;
                    case 4:
                        if (vt.tdy > 0) {
                            vt.y -= vat;
                            td.style.paddingTop = vt.y + 'px';
                            vt.tdy--;
                        }
                        break;

                }
                console.log('tdx: ' + vt.tdx + ', tdy: ' + vt.tdy);
                checkwin();
                break;

            // Quay trái
            case 2:
                vt.hh--;
                if (vt.hh == 0) {
                    vt.hh = 4;
                }
                art.src = '../IMG/main' + vt.hh + '.png'; // Thay đổi đường dẫn của ảnh
                break;

            // Quay phải
            case 3:
                vt.hh++;
                if (vt.hh == 5) {
                    vt.hh = 1;
                }
                art.src = '../IMG/main' + vt.hh + '.png'; // Thay đổi đường dẫn của ảnh
                break;

            // Vòng lặp bắt đầu
            case 4:
                let loopCount = document.getElementById('box' + boxes[i].boxid).querySelector("input").value;
                if (loopCount > 0) {
                    stack.push({ index: i, count: loopCount });
                }
                break;

            // Vòng lặp kết thúc
            case 5:
                if (stack.length > 0) {
                    let loop = stack[stack.length - 1];
                    loop.count--;
                    if (loop.count > 0) {
                        i = loop.index; // Quay lại đầu vòng lặp
                    } else {
                        stack.pop(); // Kết thúc vòng lặp
                    }
                }
                break;
        }
        i++;
    }
    if (checklose) {
        lose();
    }
    toggleButtons(false);
    addButtons();
}

function reset_run(k) {
    reset();
    runmain(k);
    console.log('reset_run ' + vt.hh);
}

function delay(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

// enter run code
document.addEventListener('keydown', function (event) {
    if (event.key === 'Enter' || event.keyCode === 13) {
        reset_run(1);
    }
});

function reset() {
    console.log("Tác vụ đã bị hủy bỏ");
    main.hh = 2; //huong
    vl = 0; //lap
    di = 0;
    vt.x = 15;
    vt.y = 2;
    vt.tdx = 0;
    vt.tdy = 0;
    td.style.paddingLeft = vt.x + 'px';
    td.style.paddingTop = vt.y + 'px';
    vt.hh = 2;
    art.src = '../IMG/main' + vt.hh + '.png'; // Thay đổi đường dẫn của ảnh
    if (maplv === 3) {
        checkkey = false;
        chiakhoa.style.display = 'block';
    }
}


// function addButtons() {
//     var buttonContainer = document.getElementById('buttonContainer');
//     var display = buttonContainer.style.display;
//     if (display === 'none') {
//         buttonContainer.style.display = 'block';
//     } else {
//         buttonContainer.style.display = 'none';
//     }
// }

var checkdisplay = 'none';

function addButtons() {
    onbutton();
}

function onbutton() {
    var buttonContainer = document.getElementById('buttonContainer');
    var buttons = buttonContainer.getElementsByTagName('button');
    var slbutton;

    switch (maplv) {
        case 0:
            slbutton = 1;
            break;
        case 1:
            slbutton = 3;
            break;
        case 2:
            slbutton = 4;
            break;
        default:
            slbutton = buttons.length;
    }

    // Hiển thị hoặc ẩn các nút theo mức đ�� trình đ��
    if (checkdisplay == 'none') {
        checkdisplay = 'block';
    } else {
        checkdisplay = 'none';
    }

    for (var i = 0; i < slbutton; i++) {
        buttons[i].style.display = checkdisplay;
    }
}



class Box {
    constructor(x, y, width, height, text, color, boxid, codeid) {
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
        this.text = text;
        this.color = color;
        this.boxid = boxid;
        this.codeid = codeid;
    }


}






// Tạo và gắn id CSS cho các phần tử HTML
const boxid = [];
const boxes = [];
const hb = 30;
let dem = 1;
// Thêm đối tượng Box mới vào danh sách
const widthmh = window.innerWidth;
const heightmh = window.innerHeight;



if (widthmh > 770) {
    boxes.push(new Box(550, 200, 300, 50, "Program start [max: " + boxes.length + "/" + max + "]", "#FFD700", 0));
    addidbox(0);
} else {
    boxes.push(new Box(120, 950, 300, 50, "Program start [max: " + boxes.length + "/" + max + "]", "#FFD700", 0));
    addidbox(0);
}

// boxes.push(new Box(550, 150, 300, 50, "Đường đi của rồng!", "#FFD700", 0));
//     addidbox(0);

function updatebox() {
    document.getElementById("box0").innerHTML = "Program start [max: " + (boxes.length - 1) + "/" + max + "]", "#FFD700";
}



//test
// codeadd(4);
// codeadd(3);
// codeadd(1);


function codeadd(num) {
    if (dem > max) {
        showCustomAlert("Hạn chế vượt quá giới hạn", "../IMG/icon_canhbao.jpg");
        return;
    }
    switch (num) {
        case 1:
            boxes.push(new Box(boxes[0].x, boxes[dem - 1].y + boxes[dem - 1].height, 160, hb, "Đi thẳng", "#DC143C", dem, num));
            break;
        case 2:
            boxes.push(new Box(boxes[0].x, boxes[dem - 1].y + boxes[dem - 1].height, 160, hb, "Quay phải", "#1E90FF", dem, num));
            break;
        case 3:
            boxes.push(new Box(boxes[0].x, boxes[dem - 1].y + boxes[dem - 1].height, 160, hb, "Quay trái", "#1E90FF", dem, num));
            break;
        case 4:
            boxes.push(new Box(boxes[0].x, boxes[dem - 1].y + boxes[dem - 1].height, 200, hb, "Vòng lặp", "#8B008B", dem, num));
            break;
        case 5:
            boxes.push(new Box(boxes[0].x, boxes[dem - 1].y + boxes[dem - 1].height, 80, hb, "end.", "#FF8C00", dem, num));
            break;
    }

    addidbox(dem++);
    if (num == 4) {
        codeadd(5);
    }

    updatebox();
}


function removeBox() {

    if (boxes.length - 1 !== 0) {

        // Lấy id của hộp cần xóa
        const boxIdToRemove = 'box' + (boxes.length - 1);
        // const boxIdToRemove = 'box' + (boxes[dem - 1].boxid);
        const elementToRemove = document.getElementById(boxIdToRemove);

        // console.log('length ' + boxes.length);
        elementToRemove.parentNode.removeChild(elementToRemove);



        // Tìm và xóa phần tử HTML của hộp cần xóa
        // for (var i = 1; i < boxes.length; i++) {
        //     boxIdToRemove = 'box' + i;

        // }
        // xep lai cac hop
        // for (var i = 1; i < dem; i++) {
        //     document.getElementById('box' + boxes[i].boxid).id = 'box' + i;
        // }



        // Xóa hộp cần xóa khỏi danh sách
        // boxes.splice(boxes.length-1, 1);
        boxes.splice(boxes[boxes.length - 1].boxid, 1);
        // boxes.splice(1, dem - 1);



        // xep lai cac hop
        // for (var i = 1; i < dem; i++) {
        //     boxes[i].boxid = i;
        // }



        dem--;

        infor();
        updatebox();


    }
}

function removeall() {
    if (boxes.length - 1 !== 0) {
        for (var i = 1; i < boxes.length; i++) {
            boxIdToRemove = 'box' + i;
            elementToRemove = document.getElementById(boxIdToRemove);
            elementToRemove.parentNode.removeChild(elementToRemove);
        }

        boxes.splice(1, dem - 1);
        dem = 1;
    }
    reset();
    updatebox();

}

function infor() {
    for (let i = 0; i < boxes.length; i++) {
        console.log(boxes[i].boxid);
    }
    console.log(' ');
}







function addidbox(i) {
    const box = boxes[i];
    const boxElement = document.createElement('div');
    boxElement.className = 'boxcss'; // Gán class CSS
    boxElement.id = 'box' + i;
    boxElement.style.width = box.width + 'px';
    boxElement.style.height = box.height + 'px';
    boxElement.style.backgroundColor = box.color;
    boxElement.style.left = box.x + 'px'; // Định vị theo trục x
    boxElement.style.top = box.y + 'px'; // Định vị theo trục y
    boxElement.style.color = box.color; // Đổi màu nền
    boxElement.style.color = 'white'; // Đổi màu text
    // Hiển thị text
    boxElement.textContent = box.text;
    document.body.appendChild(boxElement);

    if (box.codeid == 4) {
        const inputElement = document.createElement('input');
        inputElement.type = 'number';
        inputElement.min = 1; // Giá trị tối thiểu
        inputElement.max = 10; // Giá trị tối đa
        inputElement.inputMode = "numeric";
        inputElement.style.marginLeft = '10px';
        inputElement.style.height = '20px';
        inputElement.setAttribute('inputmode', 'numeric'); // Hỗ trợ nhập số trên điện thoại
        boxElement.appendChild(inputElement);
    
        // Khi người dùng bắt đầu kéo thả (dragstart)
        boxElement.addEventListener('dragstart', () => {
            inputElement.disabled = true; // Vô hiệu hóa input trong khi kéo
        });
    
        // Khi kết thúc kéo thả (dragend)
        boxElement.addEventListener('dragend', () => {
            setTimeout(() => {
                inputElement.disabled = false; // Kích hoạt lại input sau khi kéo
            }, 100); // Thêm thời gian ngắn để đảm bảo sự kiện chuột không bị xung đột
        });
    
        // Ngăn chặn sự kiện kéo thả khi người dùng nhấp vào input
        inputElement.addEventListener('touchstart', (event) => {
            event.stopPropagation(); // Dừng lan truyền sự kiện lên box
        });
    
        inputElement.addEventListener('mousedown', (event) => {
            event.stopPropagation(); // Dừng lan truyền sự kiện lên box
        });
    }



    // Thêm sự kiện cho các Box (hoạt động bình thường)
    let isDragging = false;
    let initialX;
    let initialY;


    boxElement.addEventListener('mousedown', (event) => {
        isDragging = true;
        initialX = event.clientX - box.x;
        initialY = event.clientY - box.y;
        boxElement.style.opacity = 0.7;
        boxElement.style.zIndex = boxes.length; // Tăng zIndex để ưu tiên hiển thị
        boxElement.style.backgroundColor = "green";

    });

    boxElement.addEventListener('touchstart', (event) => {
        event.preventDefault(); // Ngăn chặn sự kiện mặc định của touchstart
        isDragging = true;
        initialX = event.touches[0].clientX - box.x;
        initialY = event.touches[0].clientY - box.y;
        boxElement.style.opacity = 0.7;
        boxElement.style.zIndex = boxes.length; // Tăng zIndex để ưu tiên hiển thị
        boxElement.style.backgroundColor = "green";
    });


    document.addEventListener('mousemove', (event) => {
        if (isDragging) {

            boxElement.style.left = event.clientX - initialX + 'px';
            boxElement.style.top = event.clientY - initialY + 'px';
            //gioi han
            if (boxElement.offsetLeft < 0) {
                boxElement.style.left = 0 + 'px';
            }
            if (boxElement.offsetLeft > window.innerWidth - boxElement.offsetWidth) {
                boxElement.style.left = (window.innerWidth - boxElement.offsetWidth) + 'px';
            }

            if (boxElement.offsetTop < 0) {
                boxElement.style.top = 0 + 'px';
            }


        }




    });

    document.addEventListener('touchmove', (event) => {
        if (isDragging) {
            boxElement.style.left = event.touches[0].clientX - initialX + 'px';
            boxElement.style.top = event.touches[0].clientY - initialY + 'px';
            //gioi han
            if (boxElement.offsetLeft < 0) {
                boxElement.style.left = 0 + 'px';
            }
            if (boxElement.offsetLeft > window.innerWidth - boxElement.offsetWidth) {
                boxElement.style.left = (window.innerWidth - boxElement.offsetWidth) + 'px';
            }

            if (boxElement.offsetTop < 0) {
                boxElement.style.top = 0 + 'px';
            }
        }
    });

    document.addEventListener('mouseup', () => {
        if (isDragging) {
            isDragging = false;
            boxElement.style.opacity = 1;
            checksx = false;
            pgst = false;


            boxElement.style.zIndex = 0; // Xóa zIndex để trả lại giá trị mặc định
            boxElement.style.backgroundColor = box.color;



            // Lưu lại vị trí mới
            box.x = boxElement.offsetLeft;
            box.y = boxElement.offsetTop;



            // Sắp xếp lại danh sách các hộp theo vị trí y tăng dần
            for (let i = 1; i < boxes.length; i++) {
                for (let j = 1; j < boxes.length - 1; j++) {
                    if (boxes[j].y > boxes[j + 1].y) {
                        // Hoán đổi vị trí của hai hộp
                        const temp = boxes[j];
                        boxes[j] = boxes[j + 1];
                        boxes[j + 1] = temp;
                        checksx = true;


                    }


                }




            }

            infor();


            if (checksx) {
                for (let i = 1; i < boxes.length; i++) {
                    // xet vi tri
                    boxes[i].y = boxes[i - 1].y + boxes[i - 1].height;
                    document.getElementById('box' + boxes[i].boxid).style.top = boxes[i - 1].y + boxes[i - 1].height + 'px';

                }
            }







            // for (let i = 0; i < boxes.length; i++) {
            //     console.log(boxes[i].boxid);
            //     console.log(boxes[i].y);
            // }
            // console.log(' ');

        }

    });

    document.addEventListener('touchend', () => {
        if (isDragging) {
            isDragging = false;
            boxElement.style.opacity = 1;
            checksx = false;
            pgst = false;


            boxElement.style.zIndex = 0; // Xóa zIndex để trả lại giá trị mặc định
            boxElement.style.backgroundColor = box.color;



            // Lưu lại vị trí mới
            box.x = boxElement.offsetLeft;
            box.y = boxElement.offsetTop;



            // Sắp xếp lại danh sách các hộp theo vị trí y tăng dần
            for (let i = 1; i < boxes.length; i++) {
                for (let j = 1; j < boxes.length - 1; j++) {
                    if (boxes[j].y > boxes[j + 1].y) {
                        // Hoán đổi vị trí của hai hộp
                        const temp = boxes[j];
                        boxes[j] = boxes[j + 1];
                        boxes[j + 1] = temp;
                        checksx = true;


                    }


                }




            }


            if (checksx) {
                for (let i = 1; i < boxes.length; i++) {
                    // xet vi tri
                    boxes[i].y = boxes[i - 1].y + boxes[i - 1].height;
                    document.getElementById('box' + boxes[i].boxid).style.top = boxes[i - 1].y + boxes[i - 1].height + 'px';

                }
            }







            // for (let i = 0; i < boxes.length; i++) {
            //     console.log(boxes[i].boxid);
            //     console.log(boxes[i].y);
            // }
            // console.log(' ');

        }
    });

}






function formatbox() {
    for (let i = 1; i < boxes.length; i++) {
        // xet vi tri
        boxes[i].y = boxes[i - 1].y + boxes[i - 1].height;
        document.getElementById('box' + boxes[i].boxid).style.top = boxes[i - 1].y + boxes[i - 1].height + 'px';
        boxes[i].x = boxes[0].x;
        document.getElementById('box' + boxes[i].boxid).style.left = boxes[0].x + 'px';

    }
    reset();
}






