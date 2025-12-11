# GitHub 仓库创建指南

## 步骤1：配置 Git 用户信息（如果尚未配置）

在命令行中运行以下命令，替换为您的信息：

```bash
git config --global user.name "您的姓名"
git config --global user.email "您的邮箱@example.com"
```

或者仅为当前仓库配置：

```bash
git config user.name "您的姓名"
git config user.email "您的邮箱@example.com"
```

## 步骤2：创建 GitHub 仓库

### 方法一：通过 GitHub 网站创建

1. 访问 [GitHub](https://github.com)
2. 登录您的账户
3. 点击右上角的 "+" 号，选择 "New repository"
4. 仓库名称填写：`business_card`
5. 描述填写：`汽车4S店名片微信小程序`
6. 选择 Public 或 Private（根据您的需求）
7. **不要**勾选 "Initialize this repository with a README"（因为我们已经有了）
8. 点击 "Create repository"

### 方法二：使用 GitHub CLI（如果已安装）

```bash
gh repo create business_card --public --description "汽车4S店名片微信小程序"
```

## 步骤3：连接本地仓库到 GitHub

创建仓库后，GitHub 会显示仓库地址，类似：
- HTTPS: `https://github.com/您的用户名/business_card.git`
- SSH: `git@github.com:您的用户名/business_card.git`

在项目目录下运行以下命令（使用 HTTPS 地址）：

```bash
git remote add origin https://github.com/您的用户名/business_card.git
```

## 步骤4：推送代码到 GitHub

```bash
# 创建初始提交（如果还没有）
git add .
git commit -m "初始提交：汽车4S店名片微信小程序项目"

# 推送到 GitHub
git branch -M main
git push -u origin main
```

如果使用 `master` 作为默认分支：

```bash
git push -u origin master
```

## 步骤5：验证

访问 `https://github.com/您的用户名/business_card` 查看您的代码是否已成功上传。

## 常见问题

### 问题1：推送时要求输入用户名和密码
- 如果使用 HTTPS，GitHub 已不再支持密码认证
- 需要使用 Personal Access Token（PAT）
- 或者改用 SSH 方式连接

### 问题2：如何生成 Personal Access Token
1. GitHub → Settings → Developer settings → Personal access tokens → Tokens (classic)
2. 点击 "Generate new token"
3. 选择权限（至少需要 `repo` 权限）
4. 复制生成的 token，在推送时作为密码使用

### 问题3：使用 SSH 方式
1. 生成 SSH 密钥（如果还没有）：
   ```bash
   ssh-keygen -t ed25519 -C "您的邮箱@example.com"
   ```
2. 将公钥添加到 GitHub：Settings → SSH and GPG keys → New SSH key
3. 使用 SSH 地址连接：
   ```bash
   git remote set-url origin git@github.com:您的用户名/business_card.git
   ```

## 后续开发流程

每次修改代码后：

```bash
# 查看修改的文件
git status

# 添加修改的文件
git add .

# 提交修改
git commit -m "描述您的修改内容"

# 推送到 GitHub
git push
```

