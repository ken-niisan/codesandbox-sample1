import "./styles.css";
// テクストボックスの値を取得し初期化
// 追加した値を変数に格納する
const onClickAdd = () => {
  // alert();
  const inputText = document.getElementById("add-text").value;
  // 追加ボタンを押したときに値を空にする
  document.getElementById("add-text").value = "";

  //divタグを生成
  const div = document.createElement("div");
  div.className = "list-row";
  // console.log(div);
  // alert(inputText);

  //liタグ生成
  const li = document.createElement("li");
  li.innerText = inputText;
  // console.log(li);

  //buttun　完了の作成
  const completeButton = document.createElement("button");
  completeButton.innerText = "完了";
  completeButton.addEventListener("click", () => {
    alert("完了");
  });
  //buttun　完了の作成
  const deleteButton = document.createElement("button");
  deleteButton.innerText = "削除";
  deleteButton.addEventListener("click", () => {
    const deleteTarget = deleteButton.parentNode;
    document.getElementById("incomplete-list").removeChild(deleteTarget);
  });

  //divタグの子要素に各要素を設定
  div.appendChild(li);
  div.appendChild(completeButton);
  div.appendChild(deleteButton);
  // console.log(div);

  //未完了のリストに追加
  document.getElementById("incomplete-list").appendChild(div);
};
document.getElementById("add-button").addEventListener("click", () => {
  onClickAdd();
});
