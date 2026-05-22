const form = document.querySelector("#learning-form");
const output = document.querySelector("#output");
const statusPill = document.querySelector("#status-pill");
const progressPanel = document.querySelector("#progress-panel");
const progressFill = document.querySelector("#progress-fill");
const progressLabel = document.querySelector("#progress-label");
const progressCopy = document.querySelector("#progress-copy");
const depthInput = document.querySelector("#depth");
const depthLabel = document.querySelector("#depth-label");
const topicInput = document.querySelector("#topic");

const depthCopy = {
  1: {
    label: "快速",
    badge: "30 秒版",
    cue: "先抓用途、机制和边界。",
    sectionLimit: 2,
  },
  2: {
    label: "平衡",
    badge: "学习卡",
    cue: "解释机制、流程、误区和练习。",
    sectionLimit: 3,
  },
  3: {
    label: "深入",
    badge: "深挖版",
    cue: "补充扩展概念、失败场景和实践任务。",
    sectionLimit: 5,
  },
};

const modeCopy = {
  ai: {
    lens: "概念机制",
    badge: "AI concept",
    terms: [
      ["输入", "用户问题、文档、任务约束或工具返回值，是模型开始工作的原料。"],
      ["上下文", "临时提供给模型参考的信息。它不是长期记忆，但会直接影响这次输出。"],
      ["推理链路", "从目标到步骤再到答案的组织过程，应该能被复述、检查和修正。"],
      ["验证", "用来源、测试、对照样例或人工判断确认输出是否可靠。"],
    ],
    steps: [
      {
        title: "定义问题",
        body: "先确认它解决什么痛点，而不是只记一个名词。",
        output: ["一句话用途", "适用场景", "不适用场景"],
      },
      {
        title: "拆成流程",
        body: "看信息如何进入系统、如何被处理、如何变成输出。",
        output: ["输入来源", "处理步骤", "输出形式"],
      },
      {
        title: "找失败场景",
        body: "理解边界比背定义更有用，尤其是模型应用。",
        output: ["错误输入", "错误上下文", "过度自动化"],
      },
      {
        title: "做小练习",
        body: "用自己的话复述，再回答一个具体问题。",
        output: ["复述", "举例", "验证答案"],
      },
    ],
  },
  web3: {
    lens: "链上行为",
    badge: "Web3 lens",
    terms: [
      ["账户", "交易发起者或资产持有人，通常决定签名来源和权限边界。"],
      ["状态", "链上保存的数据，比如余额、授权额度、所有权和参数。"],
      ["交易", "一次可能改变状态的链上操作，需要签名、gas 和执行结果。"],
      ["权限", "谁能调用、谁能转走资产、谁能修改关键参数。"],
    ],
    steps: [
      {
        title: "识别参与者",
        body: "谁调用函数，谁拥有权限，谁的余额或状态会变化。",
        output: ["调用者", "资产方", "合约方"],
      },
      {
        title: "看状态读写",
        body: "重点找 storage 变量、mapping、事件和外部调用。",
        output: ["读取条件", "写入字段", "事件记录"],
      },
      {
        title: "检查风险点",
        body: "关注授权、重入、外部调用、中心化权限和错误假设。",
        output: ["权限过大", "调用顺序", "失败处理"],
      },
      {
        title: "转成用户故事",
        body: "把函数翻译成普通用户实际会发生的动作。",
        output: ["用户动作", "钱包提示", "链上结果"],
      },
    ],
  },
  practice: {
    lens: "实践任务",
    badge: "Workflow",
    terms: [
      ["目标", "完成后应该得到的明确结果，而不是模糊方向。"],
      ["输入", "用户需要提供的资料、代码、链接或约束。"],
      ["工具", "AI、搜索、代码执行、合约浏览器等可用能力。"],
      ["验收", "判断任务是否真的完成的测试、截图或 checklist。"],
    ],
    steps: [
      {
        title: "写清目标",
        body: "明确完成后应该得到什么可观察产物。",
        output: ["产物类型", "完成标准", "时间范围"],
      },
      {
        title: "列出输入",
        body: "确定需要用户提供什么资料、代码或上下文。",
        output: ["必要信息", "可选信息", "缺口"],
      },
      {
        title: "设计工具链",
        body: "决定哪些步骤可以由 AI 草拟，哪些必须人工确认。",
        output: ["AI 草拟", "工具执行", "人工判断"],
      },
      {
        title: "设置验收",
        body: "用测试、截图、问答或 checklist 检查任务是否完成。",
        output: ["检查点", "失败条件", "下一步"],
      },
    ],
  },
};

const conceptHints = [
  {
    match: ["rag", "检索", "retrieval"],
    summary:
      "RAG 是把外部资料先检索出来，再交给模型回答的做法。它的重点不是让模型记住一切，而是让模型在回答时引用更贴近任务的上下文。",
    deeper:
      "一个 RAG 系统通常包括资料切分、向量化、检索、上下文组装、答案生成和结果验证。最常见的问题不是模型不会写，而是检索材料不相关、上下文过长、来源没有被标注，或者用户把“有引用”误认为“一定正确”。",
    why:
      "它适合企业知识库、客服问答、法律/研究资料检索、代码库问答等场景，因为这些任务的答案经常依赖最新或私有资料。",
    analogy:
      "像开卷考试：模型负责组织语言和推理，检索系统负责把相关课本页码翻出来。",
    sections: {
      core: [
        ["资料切分", "把长文档拆成可检索的小块。切太碎会丢上下文，切太长会降低匹配精度。"],
        ["Embedding", "把文本变成向量，让语义相近的内容在向量空间里更靠近。"],
        ["检索器", "根据用户问题找到最相关的片段。它决定模型看到什么材料。"],
        ["上下文组装", "把检索结果、用户问题和回答要求放进 prompt。顺序、长度和去重都会影响结果。"],
        ["答案验证", "检查回答是否被资料支持，是否引用了错误片段，是否超出资料范围。"],
      ],
      extension: [
        ["Reranking", "先粗召回多个候选片段，再用更强模型重新排序，提高最终上下文质量。"],
        ["Hybrid Search", "结合关键词检索和向量检索，避免纯语义检索漏掉专有名词、编号和精确字段。"],
        ["Grounding", "要求模型把回答落回给定资料，不允许凭空补全没有来源的事实。"],
        ["Evaluation Set", "准备一批标准问题和期望引用，用来持续评估检索质量与回答质量。"],
        ["Context Window", "上下文窗口不是越大越好。材料太多会引入噪声，也会增加成本和延迟。"],
      ],
      pitfalls: [
        ["误区：RAG 等于不会幻觉", "RAG 只能降低风险，不能保证正确。错误资料或错误检索会让回答更自信地错。"],
        ["误区：只要接向量库就够了", "真正难点通常在文档清洗、chunk 策略、检索评估和引用验证。"],
        ["误区：召回越多越好", "太多片段会稀释重点。更好的策略是少而准，再补充引用。"],
        ["误区：用户问题不用改写", "真实系统常需要 query rewrite，把模糊问题转成更容易检索的形式。"],
      ],
      practice: [
        "准备 5 篇文档，手动写 8 个用户问题。",
        "为每个问题标出理想引用片段，形成一个小评测集。",
        "分别尝试关键词检索、向量检索和混合检索，比较命中率。",
        "让模型回答时必须列出引用来源，并标记“不确定”的部分。",
        "记录失败样例：没检到、检错、答非所问、引用不支持结论。",
      ],
    },
    question: "RAG 里为什么要先检索资料，而不是直接问模型？",
    choices: [
      "因为检索能提供当前任务相关的外部上下文",
      "因为检索会让模型自动变成数据库",
      "因为 RAG 可以保证回答永远正确",
    ],
    correct: 0,
    feedback:
      "对。RAG 的价值在于把更贴近任务的资料放进上下文，但资料质量和检索准确度仍然要验证。",
  },
  {
    match: ["prompt injection", "提示注入", "越狱"],
    summary:
      "Prompt injection 是用户或外部内容试图覆盖原本指令的攻击方式。学习重点是区分系统目标、用户请求和不可信内容。",
    deeper:
      "风险最高的场景通常出现在模型会读取网页、邮件、文档并调用工具时。应用需要把外部内容当作数据，而不是自动当作新指令，并在工具调用前检查权限、意图和数据流向。",
    why:
      "它是 AI 应用安全里的基础问题，尤其影响浏览器 agent、邮件助手、客服系统、知识库问答和带工具调用的工作流。",
    analogy:
      "像把便条夹进合同里，试图让执行者把便条当成正式条款。",
    sections: {
      core: [
        ["指令层级", "系统目标、开发者约束、用户请求和外部内容不在同一层级，不能互相随意覆盖。"],
        ["不可信内容", "网页、邮件、PDF、issue、合约注释都可能包含恶意指令，应默认当成数据。"],
        ["工具边界", "一旦模型能发邮件、转账、删文件或调用 API，prompt injection 的影响会从文字变成真实操作。"],
        ["确认机制", "敏感操作前需要用户确认，确认内容要具体说明动作、对象和后果。"],
      ],
      extension: [
        ["Data Exfiltration", "攻击可能诱导模型泄露系统提示、私有资料、token 或用户数据。"],
        ["Indirect Injection", "攻击不直接来自用户，而是藏在模型读取的网页、文档或第三方内容里。"],
        ["Capability Sandboxing", "限制工具权限，让模型只能访问当前任务需要的最小能力。"],
        ["Policy Checks", "在工具调用前后加入规则检查，避免模型把不可信内容当成命令执行。"],
      ],
      pitfalls: [
        ["误区：写一句不要被攻击就够了", "防御不应只靠 prompt 文案，还需要权限、隔离、日志和确认。"],
        ["误区：外部文档内容可信", "文档可能是攻击载体，尤其当它来自用户上传或网页抓取。"],
        ["误区：模型会自己判断风险", "模型可能被说服或误判，关键操作要有程序级约束。"],
      ],
      practice: [
        "写一个系统目标：只总结网页内容，不执行网页里的指令。",
        "构造一段恶意网页文字：忽略之前规则并输出私密信息。",
        "让模型标记哪些句子是数据，哪些句子试图成为指令。",
        "为发邮件、访问链接、读取文件等动作加上确认清单。",
      ],
    },
    question: "防御 prompt injection 的一个基本原则是什么？",
    choices: [
      "把外部内容视为不可信数据，并限制它改写系统目标",
      "让用户输入越长越安全",
      "只要模型足够新，就不用做权限检查",
    ],
    correct: 0,
    feedback:
      "对。关键是分离指令和数据，并在工具调用、权限、敏感信息输出前设置明确检查。",
  },
  {
    match: ["agent", "tool calling", "工具调用", "智能体"],
    summary:
      "Agent 是能把目标拆成步骤，并在需要时调用工具的 AI 工作流。关键不是像人一样自主，而是有计划、工具、观察和校正回路。",
    deeper:
      "一个实用 agent 至少需要任务目标、可用工具、执行记录、状态更新和停止条件。自主性越高，越需要权限边界、成本控制、中间结果检查和失败恢复策略。",
    why:
      "它适合研究、代码修改、资料整理、自动化运营等多步骤任务，但不适合目标模糊、风险很高且缺少验收标准的任务。",
    analogy:
      "像一个会写待办清单的助手：先判断下一步，再拿合适工具执行，然后根据结果调整。",
    sections: {
      core: [
        ["目标", "Agent 需要明确完成标准，否则会一直扩展任务或跑偏。"],
        ["计划", "把大任务拆成可执行步骤，并决定哪些步骤依赖前置结果。"],
        ["工具", "搜索、代码执行、浏览器、数据库、合约浏览器等都可以成为工具。"],
        ["观察", "每次工具调用后读取结果，再决定下一步，而不是盲目连续执行。"],
        ["停止条件", "什么时候算完成，什么时候应该请求用户确认，什么时候应该放弃。"],
      ],
      extension: [
        ["Memory", "短期记忆记录当前任务状态，长期记忆保存可复用偏好或知识。"],
        ["Human-in-the-loop", "高风险或高成本动作前让用户确认，能明显降低事故概率。"],
        ["Planner / Executor", "复杂系统会把规划和执行拆开，避免一个模型同时承担所有职责。"],
        ["Trace", "保留步骤、工具调用和观察结果，方便复盘和调试。"],
      ],
      pitfalls: [
        ["误区：Agent 越自主越好", "自主性越高，风险越高。好产品通常会把自主权放在明确边界内。"],
        ["误区：能调用工具就叫 agent", "如果没有目标、状态和反馈回路，只是普通工具调用。"],
        ["误区：失败只怪模型", "很多失败来自任务定义不清、工具权限过大或没有验收标准。"],
      ],
      practice: [
        "选择一个任务：研究一个项目、修一个 bug 或整理一个资料库。",
        "写出目标、可用工具、禁止动作和完成标准。",
        "把任务拆成 4 步，每步写明输入和输出。",
        "为每一步设计一个观察结果：成功时看到什么，失败时怎么办。",
      ],
    },
    question: "Agent 和单次聊天问答最大的区别是什么？",
    choices: [
      "Agent 会围绕目标进行多步计划、观察和工具调用",
      "Agent 一定比聊天回答更准确",
      "Agent 不需要用户提供目标",
    ],
    correct: 0,
    feedback:
      "对。Agent 的核心是多步闭环。它可以更强，也更需要边界、日志和验收标准。",
  },
  {
    match: ["erc-20", "allowance", "approve", "授权"],
    summary:
      "ERC-20 allowance 是代币持有人允许另一个地址代为花费一定数量代币的机制。它支撑 DEX 交易等场景，但也带来授权过大或忘记撤销的风险。",
    deeper:
      "approve 不会立刻转走代币，它只是设置可花费额度。之后被授权方可以通过 transferFrom 在额度内转走代币，所以无限授权、授权给错误地址、授权后合约升级或被攻击，都会扩大资产风险。",
    why:
      "这是 Web3 用户最常遇到的权限机制之一。理解 allowance 能帮助你读懂钱包弹窗、DEX 交易流程和常见资产风险。",
    analogy:
      "像给商家一张有额度的代扣授权，而不是每次付款都亲自签名。",
    sections: {
      core: [
        ["approve", "设置 spender 可以花费多少额度，但不会立刻转移代币。"],
        ["allowance", "owner 给 spender 的剩余额度，通常存在 mapping(owner => spender => amount) 里。"],
        ["transferFrom", "spender 在额度内代表 owner 转走代币，成功后通常会减少 allowance。"],
        ["钱包弹窗", "用户看到的授权请求本质上是在给某个地址设置可花费额度。"],
      ],
      extension: [
        ["无限授权", "把额度设成极大值能减少重复授权，但如果 spender 出问题，风险也更大。"],
        ["授权撤销", "可以通过 revoke 或重新 approve 为 0 来降低暴露面。"],
        ["Permit", "EIP-2612 等 permit 方案允许用签名授权，减少一次链上 approve 交易。"],
        ["Race Condition", "旧版 approve 模式可能出现额度修改竞态，常见建议是先归零再设新额度。"],
      ],
      pitfalls: [
        ["误区：approve 就是付款", "approve 只是授权。真正资产移动通常发生在 transferFrom。"],
        ["误区：授权给知名 DApp 一定安全", "还要看具体 spender 地址、合约权限和是否可升级。"],
        ["误区：授权一次就不用管", "长期无限授权会累积风险，尤其是不用的协议。"],
      ],
      practice: [
        "打开一个 ERC-20 合约，找到 approve、allowance、transferFrom。",
        "画出 owner、spender、recipient 三个角色之间的关系。",
        "模拟一次 DEX swap：先 approve，再由 router transferFrom。",
        "检查钱包授权管理页面，找出一个可以撤销的旧授权。",
      ],
    },
    question: "approve 和 transfer 的核心区别是什么？",
    choices: [
      "approve 设置额度，transfer 直接转移资产",
      "approve 一定比 transfer 更安全",
      "transfer 只能由合约调用，用户不能调用",
    ],
    correct: 0,
    feedback:
      "对。approve 是授权额度，真正花费通常发生在后续 transferFrom。学习时要盯住谁被授权、额度多少、是否可撤销。",
  },
];

let progressTimer = null;

function escapeHtml(value) {
  return String(value)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

function pickConcept(topic, mode) {
  const normalized = topic.toLowerCase();
  const exact = conceptHints.find((item) =>
    item.match.some((keyword) => normalized.includes(keyword)),
  );

  if (exact) return exact;

  const genericByMode = {
    ai: {
      summary: `${topic} 可以先从输入、处理、输出和验证四个角度理解。不要只背定义，先问它改变了哪一步工作流。`,
      deeper:
        "继续学习时，可以追问：它依赖什么数据？失败时会出现什么误导？如何用测试或人工检查来确认结果？如果涉及工具调用，还要关注权限和成本。",
      why: "这个概念值得学，是因为它通常会影响 AI 应用的可靠性、用户体验或自动化边界。",
      analogy: "像学习一台新机器：先看原料入口、加工过程、成品出口，再看什么时候会卡住。",
      sections: buildGenericSections(topic, mode),
      question: `学习 ${topic} 时，第一步最应该确认什么？`,
      choices: ["它解决的问题和使用边界", "它的名字听起来是否先进", "它能否替代所有人工判断"],
    },
    web3: {
      summary: `${topic} 可以先当成一个链上状态变化问题：谁发起交易，合约检查什么条件，最后哪些状态被改变。`,
      deeper:
        "继续拆解时，可以看权限、资产流向、外部调用和失败处理。不要把合约名字等同于真实行为，函数里的状态变化才是重点。",
      why: "Web3 概念通常和资产、身份或权限绑定。看懂它能帮助你判断钱包弹窗、合约函数和协议交互是否合理。",
      analogy: "像一本公开账本里的流程单：每一步都留下记录，但写入前必须满足规则。",
      sections: buildGenericSections(topic, mode),
      question: `阅读 ${topic} 时，最值得优先检查什么？`,
      choices: ["谁有权限，以及哪些状态会改变", "变量名是否足够漂亮", "合约注释是否很多"],
    },
    practice: {
      summary: `${topic} 可以拆成目标、输入、步骤和验收标准。AI 适合先生成草案，人负责判断是否符合真实场景。`,
      deeper:
        "实践型任务要避免只生成一段漂亮解释。更好的产物应该包含清单、可执行步骤、检查点，以及失败时下一步怎么调整。",
      why: "任务型学习最重要的是把知识变成动作：你不仅知道概念，还能用它完成一个可检查的小任务。",
      analogy: "像让助手先画路线图，你再确认目的地、路况和是否真的到达。",
      sections: buildGenericSections(topic, mode),
      question: `把 ${topic} 做成工作流时，最重要的输出是什么？`,
      choices: ["可检查的步骤和验收标准", "越长越好的说明文", "完全不需要用户参与的自动化"],
    },
  };

  return {
    ...genericByMode[mode],
    correct: 0,
    feedback: "对。先抓问题、边界和验收方式，学习会比只看定义更稳。",
  };
}

function buildGenericSections(topic, mode) {
  const modeLabel = modeCopy[mode].lens;
  return {
    core: [
      ["问题", `${topic} 解决什么具体问题？先写出一个真实使用场景。`],
      ["输入", `它需要哪些数据、权限、上下文或用户意图？输入质量会直接影响结果。`],
      ["机制", `用 ${modeLabel} 的角度拆成 3-4 个步骤，避免停留在口号。`],
      ["输出", "观察它最终生成什么、改变什么、或者让用户做出什么决定。"],
    ],
    extension: [
      ["依赖条件", "它依赖哪些工具、模型、合约、数据源或外部系统？"],
      ["成本", "学习和使用它的成本可能包括延迟、gas、错误率、人工审核或安全风险。"],
      ["替代方案", "找一个相邻概念对比：它们分别适合什么任务？"],
      ["评估方式", "准备小样例或 checklist，避免只凭感觉判断自己理解了。"],
    ],
    pitfalls: [
      ["误区：概念等于产品", "一个概念要落地，还需要交互、边界、错误处理和验收。"],
      ["误区：解释流畅就代表正确", "AI 生成内容要检查来源、逻辑和是否过度推断。"],
      ["误区：只看定义就够了", "真正理解来自例子、反例和实践任务。"],
    ],
    practice: [
      `用一句话解释 ${topic} 解决的问题。`,
      "写出一个适用场景和一个不适用场景。",
      "画出输入、处理、输出、验证四步。",
      "列出三个新手容易误解的点。",
    ],
  };
}

function setStatus(label, busy = false) {
  statusPill.classList.toggle("is-busy", busy);
  statusPill.lastChild.textContent = ` ${label}`;
}

function setProgress(percent, label) {
  progressFill.style.width = `${percent}%`;
  progressLabel.textContent = `${percent}%`;
  progressCopy.textContent = label;
}

function startGeneration(topic, mode, depth) {
  clearInterval(progressTimer);
  progressPanel.hidden = false;
  setStatus("Generating", true);
  document.body.classList.add("has-result");
  output.innerHTML = "";

  const stages = [
    [16, "识别主题、背景和学习模式"],
    [38, "生成核心解释和类比"],
    [62, "补充扩展知识与常见误区"],
    [84, "准备实践任务和测验反馈"],
    [100, "完成"],
  ];
  let index = 0;
  setProgress(stages[index][0], stages[index][1]);

  progressTimer = setInterval(() => {
    index += 1;
    const stage = stages[index];
    if (!stage) {
      clearInterval(progressTimer);
      renderLearningCard(topic, mode, depth);
      progressPanel.hidden = true;
      setStatus("Ready", false);
      return;
    }
    setProgress(stage[0], stage[1]);
  }, 260);
}

function renderLearningCard(topic, mode, depth) {
  const profile = modeCopy[mode];
  const concept = pickConcept(topic, mode);
  const safeTopic = escapeHtml(topic);
  const depthMeta = depthCopy[depth];

  output.innerHTML = `
    <section class="learning-map">
      <article class="concept-card">
        <div class="concept-meta">
          <span class="badge">${escapeHtml(profile.badge)}</span>
          <span class="badge blue">${escapeHtml(depthMeta.badge)}</span>
          <span class="badge mint">${escapeHtml(profile.lens)}</span>
        </div>
        <h2>${safeTopic}</h2>
        <div class="answer-strip">
          <span>一句话解释</span>
          <p>${escapeHtml(concept.summary)}</p>
        </div>
        <div class="why-box">
          <strong>为什么值得学</strong>
          <span>${escapeHtml(concept.why)}</span>
        </div>
        <details class="deep-note" ${depth === "3" ? "open" : ""}>
          <summary>深入说明</summary>
          <p>${escapeHtml(depthMeta.cue)} ${escapeHtml(concept.deeper)}</p>
        </details>
        <div class="analogy-box">
          <strong>类比</strong>
          <span>${escapeHtml(concept.analogy)}</span>
        </div>
      </article>

      <aside class="term-lab">
        <h3>术语实验台</h3>
        <p>点一个术语，看它在当前学习模式里的含义。</p>
        <div class="term-grid">
          ${profile.terms
            .map(
              ([term], index) => `
                <button class="term-button ${index === 0 ? "is-active" : ""}" type="button" data-term-index="${index}">
                  ${escapeHtml(term)}
                </button>
              `,
            )
            .join("")}
        </div>
        <div id="term-detail" class="term-detail">
          <strong>${escapeHtml(profile.terms[0][0])}</strong>
          <span>${escapeHtml(profile.terms[0][1])}</span>
        </div>
      </aside>
    </section>

    <section class="mechanism-card">
      <div class="section-title">
        <div>
          <p class="section-kicker">Mental model</p>
          <h2>机制图</h2>
        </div>
        <span class="step-count">从输入到验证</span>
      </div>
      <div class="mechanism-flow">
        ${renderMechanismFlow(profile.steps)}
      </div>
    </section>

    <section class="study-card">
      <div class="section-title">
        <div>
          <p class="section-kicker">Learning material</p>
          <h2>学习资料</h2>
        </div>
        <span class="step-count">${escapeHtml(depthMeta.label)}深度</span>
      </div>
      <div class="study-tabs" role="tablist" aria-label="学习资料分类">
        ${renderStudyTabs()}
      </div>
      <div id="study-panel" class="study-panel">
        ${renderStudyPanel("core", concept.sections.core, depthMeta.sectionLimit)}
      </div>
    </section>

    <section class="interaction-card">
      <div class="section-title">
        <div>
          <p class="section-kicker">Process</p>
          <h2>流程拆解</h2>
        </div>
        <span id="step-count" class="step-count">1 / ${profile.steps.length}</span>
      </div>
      <div class="stepper">
        <div class="step-tabs">
          ${profile.steps
            .map(
              (step, index) => `
                <button class="step-tab ${index === 0 ? "is-active" : ""}" type="button" data-step-index="${index}">
                  ${index + 1}. ${escapeHtml(step.title)}
                </button>
              `,
            )
            .join("")}
        </div>
        <div id="step-detail" class="step-detail">
          ${renderStepDetail(profile.steps[0])}
        </div>
      </div>
    </section>

    <section class="quiz-card">
      <div class="section-title">
        <div>
          <p class="section-kicker">Recall</p>
          <h2>即时小测</h2>
        </div>
        <span class="step-count">选择 + 自由回答</span>
      </div>
      <div class="quiz-layout">
        <div>
          <p>${escapeHtml(concept.question)}</p>
          <div class="choice-stack">
            ${concept.choices
              .map(
                (choice, index) => `
                  <button class="choice-button" type="button" data-choice-index="${index}">
                    ${escapeHtml(choice)}
                  </button>
                `,
              )
              .join("")}
          </div>
        </div>
        <form id="quiz-form" class="free-answer">
          <label for="free-answer">用自己的话复述</label>
          <textarea id="free-answer" name="answer" rows="4" placeholder="写 1-3 句：它解决什么问题、怎么工作、哪里需要验证。"></textarea>
          <button class="secondary-action" type="submit">检查复述</button>
          <div id="feedback" class="feedback" hidden></div>
        </form>
      </div>
      <div id="coach-card" class="coach-card" hidden></div>
    </section>

    <section class="boundary-card">
      <h2>AI 与人工边界</h2>
      <div class="boundary-grid">
        <div>
          <strong>AI 辅助</strong>
          <p>生成解释结构、类比、扩展知识、误区、实践任务和反馈文案。</p>
        </div>
        <div>
          <strong>人工修改 / 验证</strong>
          <p>收窄功能范围，检查概念表达，测试输入、生成、点击、切换和反馈链路。</p>
        </div>
      </div>
    </section>
  `;

  bindTermLab(profile.terms);
  bindStudyTabs(concept.sections, depthMeta.sectionLimit);
  bindStepper(profile.steps);
  bindQuiz(concept);
}

function renderMechanismFlow(steps) {
  return steps
    .map(
      (step, index) => `
        <article class="mechanism-node">
          <span>${index + 1}</span>
          <strong>${escapeHtml(step.title)}</strong>
          <p>${escapeHtml(step.output[0])}</p>
        </article>
      `,
    )
    .join("");
}

function renderStudyTabs() {
  const tabs = [
    ["core", "核心机制"],
    ["extension", "扩展知识"],
    ["pitfalls", "常见误区"],
    ["practice", "实践任务"],
  ];

  return tabs
    .map(
      ([key, label], index) => `
        <button class="study-tab ${index === 0 ? "is-active" : ""}" type="button" data-study-key="${key}">
          ${escapeHtml(label)}
        </button>
      `,
    )
    .join("");
}

function renderStudyPanel(key, items, limit) {
  const visibleItems = items.slice(0, limit);

  if (key === "practice") {
    return `
      <ol class="practice-list">
        ${visibleItems.map((item) => `<li>${escapeHtml(item)}</li>`).join("")}
      </ol>
    `;
  }

  return `
    <div class="knowledge-grid">
      ${visibleItems
        .map(
          ([title, body]) => `
            <article class="knowledge-item">
              <strong>${escapeHtml(title)}</strong>
              <p>${escapeHtml(body)}</p>
            </article>
          `,
        )
        .join("")}
    </div>
  `;
}

function renderStepDetail(step) {
  return `
    <h3>${escapeHtml(step.title)}</h3>
    <p>${escapeHtml(step.body)}</p>
    <ul class="step-output">
      ${step.output.map((item) => `<li>${escapeHtml(item)}</li>`).join("")}
    </ul>
  `;
}

function bindTermLab(terms) {
  const detail = document.querySelector("#term-detail");
  const buttons = [...document.querySelectorAll(".term-button")];

  buttons.forEach((button) => {
    button.addEventListener("click", () => {
      const index = Number(button.dataset.termIndex);
      buttons.forEach((item) => item.classList.remove("is-active"));
      button.classList.add("is-active");
      detail.innerHTML = `
        <strong>${escapeHtml(terms[index][0])}</strong>
        <span>${escapeHtml(terms[index][1])}</span>
      `;
    });
  });
}

function bindStudyTabs(sections, limit) {
  const panel = document.querySelector("#study-panel");
  const buttons = [...document.querySelectorAll(".study-tab")];

  buttons.forEach((button) => {
    button.addEventListener("click", () => {
      const key = button.dataset.studyKey;
      buttons.forEach((item) => item.classList.remove("is-active"));
      button.classList.add("is-active");
      panel.innerHTML = renderStudyPanel(key, sections[key], limit);
    });
  });
}

function bindStepper(steps) {
  const detail = document.querySelector("#step-detail");
  const count = document.querySelector("#step-count");
  const buttons = [...document.querySelectorAll(".step-tab")];

  buttons.forEach((button) => {
    button.addEventListener("click", () => {
      const index = Number(button.dataset.stepIndex);
      buttons.forEach((item) => item.classList.remove("is-active"));
      button.classList.add("is-active");
      count.textContent = `${index + 1} / ${steps.length}`;
      detail.innerHTML = renderStepDetail(steps[index]);
    });
  });
}

function bindQuiz(concept) {
  const choiceButtons = [...document.querySelectorAll(".choice-button")];
  const feedback = document.querySelector("#feedback");
  const quizForm = document.querySelector("#quiz-form");
  const coachCard = document.querySelector("#coach-card");
  let selectedChoice = null;

  choiceButtons.forEach((button) => {
    button.addEventListener("click", () => {
      const selected = Number(button.dataset.choiceIndex);
      selectedChoice = selected;
      choiceButtons.forEach((item) => {
        item.classList.remove("is-correct", "is-wrong");
        item.disabled = false;
      });
      button.classList.add(selected === concept.correct ? "is-correct" : "is-wrong");
      choiceButtons[concept.correct].classList.add("is-correct");
      feedback.hidden = false;
      feedback.textContent =
        selected === concept.correct
          ? concept.feedback
          : `这个选项不太对。${concept.feedback}`;
      renderCoachCard(coachCard, concept, selectedChoice, "");
    });
  });

  quizForm.addEventListener("submit", (event) => {
    event.preventDefault();
    const answer = new FormData(quizForm).get("answer").trim();

    feedback.hidden = false;
    if (!answer) {
      feedback.textContent = "先写一两句自己的理解，再检查。主动回忆比只看解释更有效。";
      renderCoachCard(coachCard, concept, selectedChoice, answer);
      return;
    }

    if (answer.length < 18) {
      feedback.textContent = "还可以更具体一点：补上用途、机制，或者一个风险边界。";
      renderCoachCard(coachCard, concept, selectedChoice, answer);
      return;
    }

    const hasWhy = /因为|所以|用于|通过|风险|验证|上下文|权限|状态|工具|检索|授权/.test(answer);
    feedback.textContent = hasWhy
      ? "不错，复述里已经出现了机制或验证线索。下一步可以把它改写成一个真实产品场景。"
      : "表达已经成形了。再补一句“为什么这样做”或“怎么验证”，会更像真正理解。";
    renderCoachCard(coachCard, concept, selectedChoice, answer);
  });
}

function renderCoachCard(target, concept, selectedChoice, answer) {
  const hasChoice = selectedChoice !== null;
  const choiceCorrect = selectedChoice === concept.correct;
  const normalizedAnswer = answer.trim();
  const hasMechanism = /通过|因为|所以|机制|流程|上下文|权限|状态|工具|检索|授权/.test(
    normalizedAnswer,
  );
  const hasBoundary = /风险|验证|边界|不确定|来源|失败|权限|撤销|检查/.test(normalizedAnswer);
  const score =
    (choiceCorrect ? 35 : 0) +
    (normalizedAnswer.length >= 18 ? 30 : normalizedAnswer.length > 0 ? 12 : 0) +
    (hasMechanism ? 20 : 0) +
    (hasBoundary ? 15 : 0);

  const level = score >= 80 ? "理解扎实" : score >= 50 ? "正在成形" : "需要补一刀";
  const mastered = [
    choiceCorrect ? "核心判断正确" : null,
    normalizedAnswer.length >= 18 ? "能用自己的话复述" : null,
    hasMechanism ? "提到了机制或流程" : null,
    hasBoundary ? "注意到了验证或风险边界" : null,
  ].filter(Boolean);
  const gaps = [
    !hasChoice ? "还没有完成选择题判断" : null,
    hasChoice && !choiceCorrect ? "选择题暴露了一个核心概念误区" : null,
    normalizedAnswer.length < 18 ? "复述还偏短，需要补充原因或例子" : null,
    !hasMechanism ? "还缺少“它怎么工作”的机制描述" : null,
    !hasBoundary ? "还缺少“如何验证/哪里会失败”的边界意识" : null,
  ].filter(Boolean);

  target.hidden = false;
  target.innerHTML = `
    <div class="coach-header">
      <div>
        <p class="section-kicker">Coach view</p>
        <h3>你的理解画像</h3>
      </div>
      <strong>${Math.min(score, 100)}%</strong>
    </div>
    <div class="coach-meter" aria-hidden="true">
      <span style="width: ${Math.min(score, 100)}%"></span>
    </div>
    <div class="coach-grid">
      <div>
        <strong>${escapeHtml(level)}</strong>
        <p>${escapeHtml(mastered[0] || "先完成一道判断题和一次复述，画像会更准确。")}</p>
      </div>
      <div>
        <strong>遗漏点</strong>
        <p>${escapeHtml(gaps[0] || "暂时没有明显遗漏，可以进入下一题。")}</p>
      </div>
      <div>
        <strong>下一题</strong>
        <p>${escapeHtml(buildNextQuestion(concept, gaps))}</p>
      </div>
    </div>
  `;
}

function buildNextQuestion(concept, gaps) {
  if (gaps.some((gap) => gap.includes("机制"))) {
    return "不用术语，按 1 → 2 → 3 的顺序讲一遍它怎么工作。";
  }

  if (gaps.some((gap) => gap.includes("边界"))) {
    return "举一个它可能失败或需要人工验证的场景。";
  }

  if (gaps.some((gap) => gap.includes("选择题"))) {
    return `重新回答：${concept.question}`;
  }

  return "把这个概念应用到一个真实产品功能里，并写出验收标准。";
}

function updateDepthLabel() {
  depthLabel.textContent = depthCopy[depthInput.value].label;
}

depthInput.addEventListener("input", updateDepthLabel);
updateDepthLabel();

document.querySelectorAll(".sample-chip").forEach((button) => {
  button.addEventListener("click", () => {
    topicInput.value = button.dataset.sample;
    const modeInput = document.querySelector(`input[name="mode"][value="${button.dataset.mode}"]`);
    modeInput.checked = true;
    depthInput.value = button.dataset.mode === "web3" ? "3" : depthInput.value;
    updateDepthLabel();
    topicInput.focus();
  });
});

form.addEventListener("submit", (event) => {
  event.preventDefault();
  const data = new FormData(form);
  const topic = data.get("topic").trim();
  const mode = data.get("mode");
  const depth = data.get("depth");

  if (!topic) {
    document.body.classList.remove("has-result");
    output.innerHTML = `
      <article class="welcome-card">
        <div class="orbital-mark" aria-hidden="true">
          <span></span>
          <span></span>
          <span></span>
        </div>
        <h2>需要一个输入</h2>
        <p>输入概念、问题或一小段代码后，才能生成学习路径。</p>
      </article>
    `;
    setStatus("Need input", false);
    return;
  }

  startGeneration(topic, mode, depth);
});
