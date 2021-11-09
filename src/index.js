import "./styles.css";

const onClickAdd = () => {
    // テキストボックスで入力された値を取得
    const inputText = document.getElementById("add-text").value;
    // 入力された値は初期化する
    document.getElementById("add-text").value = "";

    createIncompleteList(inputText);
};

// 未完了リストから指定の要素を削除する関数
const deleteFromIncompleteList = (target) => {
    // 未完了リスト「incomplete-area」の子要素の中から定数「ｔarget」要素を削除
    // ※表示上は消えるが、メモリ上には残るので再参照は可能
    document.getElementById("incomplete-list").removeChild(target);
};

// 未完了リストに追加する関数
const createIncompleteList = (text) => {
    // divタグを生成
    const div = document.createElement("div");
    // 生成したdivタグに対してクラス属性を「list-row」という名前で付与
    div.className = "list-row";

    // liタグを生成
    const li = document.createElement("li");
    // 定数constの中身をliタグのテキストとして設定
    li.innerText = text;

    // button(完了)を生成
    const completeButton = document.createElement("button");
    completeButton.innerText = "完了";
    // 「完了」ボタンに対してclickイベントを付与
    completeButton.addEventListener("click", () => {
        // 未完了リスト「incomplete-area」の子要素の中から「完了」ボタンの親タグ(div)を削除
        deleteFromIncompleteList(completeButton.parentNode);
        // 完了リストに追加する要素を取得
        const addTarget = completeButton.parentNode;
        // TODO内容テキストを取得
        const text = addTarget.firstElementChild.innerText;
        // div以下を初期化(divだけにする)
        addTarget.textContent = null;
        // liタグ生成
        const li = document.createElement("li");
        li.innerText = text;
        // button(戻す)を生成
        const backButton = document.createElement("button");
        backButton.innerText = "戻す";
        backButton.addEventListener("click", () => {
            // 押された戻すボタンの親タグ（div）を完了リストから削除
            const deleteTarget = backButton.parentNode;
            document.getElementById("complete-list").removeChild(deleteTarget);

            // テキスト取得
            createIncompleteList(text);
        });
        // divタグの子要素に各要素を設定
        addTarget.appendChild(li);
        addTarget.appendChild(backButton);
        console.log(addTarget);

        // 完了リスト「complete-list」に追加
        document.getElementById("complete-list").appendChild(addTarget);
    });

    // button(削除)を生成
    const deleteButton = document.createElement("button");
    deleteButton.innerText = "削除";
    // 「削除」ボタンに対してclickイベントを付与
    deleteButton.addEventListener("click", () => {
        // 未完了リスト「incomplete-area」の子要素の中から「削除」ボタンの親タグ(div)を削除
        deleteFromIncompleteList(deleteButton.parentNode);
    });

    // divタグの子要素に各要素を設定
    div.appendChild(li);
    div.appendChild(completeButton);
    div.appendChild(deleteButton);
    //console.log(div);

    // 「未完了のTODO」リストに定数divを追加
    document.getElementById("incomplete-list").appendChild(div);
};

// 「add-button」というid属性値に対して、clickイベントを付与してあげて、clickされたら「onClickAdd」関数が動く
document
    .getElementById("add-button")
    .addEventListener("click", () => onClickAdd());
