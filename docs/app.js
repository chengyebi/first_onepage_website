/* ========= 全站脚本 ========= */

// 1) 控制台欢迎
console.log("%cWelcome to My First One‑Page Site!", "color:#0060df;font-size:16px;font-weight:bold;");

// 2) 表单提交示例（阻止默认刷新）
document.getElementById("contact-form").addEventListener("submit", function (e) {
  e.preventDefault();           // 阻止表单跳转
  alert("感谢留言！(仅示例，无后端接收)");
  this.reset();                 // 清空表单
});
