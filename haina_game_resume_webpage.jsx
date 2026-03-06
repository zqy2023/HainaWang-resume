export default function HainaGameResume() {
  const characterImage = "./ef0b7988-a7c9-403d-854a-8e22515df32e.png";

  const skills = [
    {
      name: "企业合作",
      level: 5,
      tag: "核心主技能",
      desc: "负责赞助商对接、合作需求沟通、活动形式设计与落地推进，能够根据学生群体特点调整合作方案。",
      details: ["企业需求沟通", "赞助合作推进", "定制活动设计", "校企关系维护"],
    },
    {
      name: "招聘活动执行",
      level: 5,
      tag: "高频实战技能",
      desc: "熟悉招聘活动完整执行链路，能够处理签到、简历流转、候选人分流、流程衔接和现场节奏把控。",
      details: ["签到与候选人管理", "简历初筛", "面试流程协同", "现场执行与问题处理"],
    },
    {
      name: "宣讲会运营",
      level: 4,
      tag: "活动辅助技能",
      desc: "参与讲座及宣讲会的前期策划、文案宣发、主持口播、场地布置与流程安排。",
      details: ["讲座策划", "宣传文案", "主持口播", "环境布置"],
    },
    {
      name: "活动控场",
      level: 4,
      tag: "团队协作技能",
      desc: "能够在现场快速处理临时情况，维持流程顺畅并提升参与者体验。",
      details: ["现场秩序维护", "候选人分流", "节奏把控", "突发情况应对"],
    },
  ];

  const quests = [
    {
      title: "智联招聘 × 隆基绿能 海外招聘活动",
      type: "企业招聘副本",
      status: "已完成",
      summary: "参与大型招聘活动的现场执行与流程支持，协助企业和候选人高效完成对接。",
      tasks: ["现场签到", "候选人引导", "简历初筛", "薪资沟通协助", "现场秩序维护"],
    },
    {
      title: "UOffer × 紫金矿业 招聘宣讲会",
      type: "宣讲副本",
      status: "已完成",
      summary: "支持宣讲活动现场运营与候选人沟通，保证活动流程和招聘体验。",
      tasks: ["签到与名单确认", "面试流程支持", "环境布置", "候选人答疑", "现场协同"],
    },
    {
      title: "西北工业大学 / 天津大学 / 中山大学 澳洲见面会与专项招聘会",
      type: "校方合作副本",
      status: "已完成",
      summary: "参与高校背景的人才交流及招聘活动对接，熟悉活动组织流程及多方协同。",
      tasks: ["会务支持", "流程协同", "学生对接", "活动执行", "现场沟通"],
    },
    {
      title: "武汉市人才局 / 深圳前海人才 海外人才活动",
      type: "政府项目副本",
      status: "已完成",
      summary: "参与政府人才引进类活动，了解官方活动的执行节奏、宣传边界及对接方式。",
      tasks: ["活动流程支持", "现场秩序维护", "人员引导", "对接沟通", "宣传边界把控"],
    },
  ];

  const achievements = [
    "UTS中国学联外联部部长",
    "经手赞助商活动全流程：讲座、宣发、拉新、口播、定制活动",
    "参与职规项目并支持招聘现场运营与流程协同",
    "熟悉中国企业在澳招聘流程与澳洲宣传雷区",
  ];

  const statCard = (label, value, sub) => (
    <div className="rounded-2xl border border-cyan-400/30 bg-slate-900/70 px-4 py-3 shadow-[0_0_20px_rgba(34,211,238,0.08)] backdrop-blur">
      <div className="text-[11px] uppercase tracking-[0.2em] text-cyan-300/70">{label}</div>
      <div className="mt-1 text-lg font-bold text-white md:text-xl">{value}</div>
      {sub ? <div className="mt-1 text-xs text-slate-400">{sub}</div> : null}
    </div>
  );

  const SkillBar = ({ level }) => (
    <div className="mt-3 h-3 overflow-hidden rounded-full bg-slate-800">
      <div
        className="h-full rounded-full bg-[linear-gradient(90deg,#22d3ee,#818cf8,#c084fc)] shadow-[0_0_16px_rgba(34,211,238,0.45)]"
        style={{ width: `${level * 20}%` }}
      />
    </div>
  );

  return (
    <div className="min-h-screen bg-[radial-gradient(circle_at_top,_rgba(34,211,238,0.18),_transparent_28%),radial-gradient(circle_at_bottom_right,_rgba(168,85,247,0.18),_transparent_26%),linear-gradient(180deg,_#08111f_0%,_#060b16_100%)] text-slate-100">
      <div className="mx-auto max-w-7xl px-6 py-8 md:px-10 lg:px-12">
        <header className="mb-6 flex items-center justify-between rounded-3xl border border-cyan-400/20 bg-slate-950/70 px-6 py-4 shadow-[0_0_40px_rgba(34,211,238,0.08)] backdrop-blur">
          <div>
            <div className="text-xs uppercase tracking-[0.35em] text-cyan-300/70">Character Interface</div>
            <h1 className="mt-2 text-3xl font-black tracking-wide text-white md:text-4xl">Haina Wang</h1>
            <p className="mt-2 text-sm text-slate-300">校园职业活动策划 / 校企合作型角色卡简历</p>
          </div>
          <div className="hidden rounded-2xl border border-fuchsia-400/30 bg-fuchsia-500/10 px-4 py-3 text-right md:block">
            <div className="text-xs tracking-[0.28em] text-fuchsia-300/80">TARGET QUEST</div>
            <div className="mt-1 font-semibold text-white">USYD中国学联</div>
            <div className="text-sm text-fuchsia-200">学业与职业规划部门</div>
          </div>
        </header>

        <section className="rounded-[32px] border border-cyan-400/20 bg-slate-950/60 p-6 shadow-[0_0_34px_rgba(34,211,238,0.08)] backdrop-blur">
          <div className="text-center">
            <div className="text-xs uppercase tracking-[0.35em] text-cyan-300/70">Main Character</div>
            <h2 className="mt-2 text-2xl font-black text-white">角色立绘</h2>
          </div>

          <div className="mt-6 flex justify-center">
            <div className="relative flex min-h-[380px] w-full max-w-[320px] items-center justify-center rounded-[36px] border border-cyan-300/30 bg-[radial-gradient(circle_at_30%_25%,_rgba(34,211,238,0.28),_transparent_20%),radial-gradient(circle_at_70%_15%,_rgba(192,132,252,0.22),_transparent_20%),linear-gradient(180deg,_rgba(15,23,42,0.96),_rgba(2,6,23,0.98))] px-4 py-6 shadow-[inset_0_0_50px_rgba(34,211,238,0.08),0_0_45px_rgba(34,211,238,0.12)]">
              <div className="absolute left-4 top-4 rounded-xl border border-cyan-400/30 bg-cyan-400/10 px-3 py-1 text-xs tracking-[0.25em] text-cyan-200">SSR</div>
              <div className="absolute right-4 top-4 rounded-xl border border-amber-400/30 bg-amber-400/10 px-3 py-1 text-xs font-semibold text-amber-200">Lv.24</div>

              <div className="relative flex flex-col items-center">
                <img
                  src={characterImage}
                  alt="anime character"
                  className="h-[280px] w-auto object-contain drop-shadow-[0_0_25px_rgba(34,211,238,0.35)]"
                />
                <div className="mt-3 flex w-fit items-center gap-2 rounded-full border border-cyan-400/30 bg-slate-900/90 px-4 py-2 text-sm text-cyan-100">
                  <span>⚔️</span>
                  <span>外联 / 职规 / 招聘活动执行</span>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
            {statCard("职业", "校园职业活动策划")}
            {statCard("主定位", "校企合作协调")}
            {statCard("地图", "Sydney, Australia")}
            {statCard("联络方式", "WeChat: 15855153192")}
          </div>
        </section>

        <section className="mt-6 grid gap-6 lg:grid-cols-[1fr_1fr]">
          <div className="rounded-[28px] border border-cyan-400/20 bg-slate-950/60 p-5 shadow-[0_0_30px_rgba(34,211,238,0.08)] backdrop-blur">
            <div>
              <div className="text-xs uppercase tracking-[0.3em] text-cyan-300/70">Skill Tree</div>
              <h2 className="mt-1 text-xl font-bold text-white">技能</h2>
            </div>
            <div className="mt-4 space-y-4">
              {skills.map((skill) => (
                <div key={skill.name} className="rounded-3xl border border-slate-700 bg-gradient-to-r from-slate-900 via-slate-900 to-cyan-950/30 p-4">
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <div className="flex items-center gap-2">
                        <div className="text-lg font-bold text-white">{skill.name}</div>
                        <span className="rounded-full border border-fuchsia-400/30 bg-fuchsia-400/10 px-2 py-0.5 text-[11px] text-fuchsia-200">{skill.tag}</span>
                      </div>
                      <div className="mt-1 text-sm text-slate-400">{skill.desc}</div>
                    </div>
                    <div className="rounded-xl border border-cyan-400/30 bg-cyan-400/10 px-3 py-1 text-sm font-semibold text-cyan-200">Lv.{skill.level}</div>
                  </div>
                  <SkillBar level={skill.level} />
                  <div className="mt-3 flex flex-wrap gap-2">
                    {skill.details.map((item) => (
                      <span key={item} className="rounded-full border border-slate-600 bg-slate-800 px-3 py-1 text-xs text-slate-200">
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-[28px] border border-amber-400/20 bg-slate-950/60 p-5 shadow-[0_0_30px_rgba(250,204,21,0.06)] backdrop-blur">
            <div>
              <div className="text-xs uppercase tracking-[0.3em] text-amber-300/70">Achievement Board</div>
              <h2 className="mt-1 text-xl font-bold text-white">成就系统</h2>
            </div>
            <div className="mt-4 space-y-3">
              {achievements.map((item) => (
                <div key={item} className="rounded-2xl border border-slate-700 bg-slate-900/80 px-4 py-3 text-sm leading-6 text-slate-200">
                  <span className="mr-2 text-amber-300">🏆</span>
                  {item}
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="mt-6 rounded-[30px] border border-fuchsia-400/20 bg-slate-950/65 p-6 shadow-[0_0_30px_rgba(192,132,252,0.08)] backdrop-blur">
          <div>
            <div className="text-xs uppercase tracking-[0.3em] text-fuchsia-300/70">Quest Log</div>
            <h2 className="mt-1 text-2xl font-black text-white">副本记录</h2>
            <p className="mt-2 text-sm leading-7 text-slate-300">
              以下为过往参与的核心项目副本，每个副本都对应不同类型的招聘、合作或人才交流活动执行经验。
            </p>
          </div>

          <div className="mt-5 grid gap-4 lg:grid-cols-2">
            {quests.map((quest, idx) => (
              <div key={quest.title} className="rounded-[26px] border border-slate-700 bg-gradient-to-b from-slate-900 to-slate-950 p-5 shadow-[0_0_22px_rgba(168,85,247,0.08)]">
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <div className="flex items-center gap-2">
                      <div className="flex h-8 w-8 items-center justify-center rounded-full border border-fuchsia-400/30 bg-fuchsia-400/10 text-sm text-fuchsia-200">
                        {idx + 1}
                      </div>
                      <span className="rounded-full border border-cyan-400/30 bg-cyan-400/10 px-2 py-1 text-[11px] text-cyan-200">
                        {quest.type}
                      </span>
                    </div>
                    <h3 className="mt-3 text-lg font-bold leading-7 text-white">{quest.title}</h3>
                  </div>
                  <div className="rounded-xl border border-emerald-400/30 bg-emerald-400/10 px-3 py-1 text-xs font-semibold text-emerald-200">
                    {quest.status}
                  </div>
                </div>

                <p className="mt-3 text-sm leading-7 text-slate-300">{quest.summary}</p>

                <div className="mt-4">
                  <div className="text-xs uppercase tracking-[0.2em] text-slate-400">详细任务</div>
                  <div className="mt-3 flex flex-wrap gap-2">
                    {quest.tasks.map((task) => (
                      <span key={task} className="rounded-full border border-slate-600 bg-slate-800 px-3 py-1 text-xs text-slate-200">
                        {task}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="mt-6 rounded-[30px] border border-cyan-400/20 bg-slate-950/65 p-6 shadow-[0_0_30px_rgba(34,211,238,0.08)] backdrop-blur">
          <div className="grid gap-4 lg:grid-cols-[1.1fr_1fr]">
            <div>
              <div className="text-xs uppercase tracking-[0.3em] text-cyan-300/70">Mission Brief</div>
              <h2 className="mt-1 text-2xl font-black text-white">当前任务</h2>
              <p className="mt-3 max-w-2xl text-sm leading-7 text-slate-300">
                希望加入 USYD中国学联学业与职业规划部门，结合过往在企业合作、招聘活动执行、人才交流会协同和留学生传播方面的经验，帮助更多同学连接企业机会，提升活动专业度、参与度与落地效率。
              </p>
            </div>
            <div className="grid gap-3 sm:grid-cols-2">
              {statCard("活动经验", "企业宣讲 / 招聘会 / 人才交流")}
              {statCard("执行环节", "签到 / 路费发放 / 简历初筛 / 面试流程")}
              {statCard("协同能力", "企业对接 / 现场维持 / 环境布置")}
              {statCard("特别加成", "熟悉澳洲宣传雷区", "更懂留学生场景与表达边界")}
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
