window.RPTMock = (function () {
  const imageUrl = (prompt) =>
    `https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=${encodeURIComponent(prompt)}&image_size=portrait_4_3`;

  const campusPosts = [
    {
      id: "post-campus-1",
      title: "为什么所有校招的公司在小红书上都会被劝退？",
      excerpt: "校招offer拿到手之后，反而开始纠结要不要去。整理了一些真实体验，供同样在犹豫的人参考。",
      author: "连理",
      avatar: "连",
      avatarColor: "#d4a58b",
      likes: 1569,
      ratio: "1.28",
      image: imageUrl("Vertical realistic photograph of a peaceful tree lined pathway beside a modern office campus in Shanghai, lush green trees, warm afternoon sunlight, no people, no text, editorial photography")
    },
    {
      id: "post-campus-2",
      title: "小红书校招入职第三周有感",
      excerpt: "入职三周的真实记录：landing 顺利、开始独立 own 项目，以及零食积分和早餐福利。",
      author: "玛卡巴卡唔西",
      avatar: "玛",
      avatarColor: "#8aa6c1",
      likes: 374,
      ratio: "1.05",
      image: imageUrl("Vertical cozy editorial illustration for a young graduate career survival guide, cute cartoon graduate sitting at a desk with a laptop and job documents, warm cream and coral palette, clean composition, no readable text"),
      detail: {
        images: ["assets/note-cover.jpg"],
        galleryCount: 1,
        body: [
          "来小红书三周啦，记录一下这段时间的真实感受。",
          "landing 比想象中顺利。入职第一周主要是熟悉文档和业务背景，mentor 会带着把团队在做的事情过一遍，也会主动问我哪里没听懂；第二周开始接一些小需求，现在已经可以独立 own 一小块项目了，从想法到上线都能参与，成就感还挺强。",
          "🍱 福利：公司有零食柜和用品柜，可以用行政积分兑换零食，纸巾和湿巾也是用行政积分换，每个月 335 积分，零食吃得不多的话还能去 REDmall 换周边。早上十点前到可以去餐柜免费领早餐，十点后如果还有剩余也能多拿一份，可以当中餐或者晚餐。",
          "🌱 氛围：组里整体非常扁平，沟通很直接。遇到不懂的问题直接问 mentor 或者同事，大家都会停下来解释，不会因为我是校招生就只让我做边角料。短短三周已经学到了不少东西。",
          "当然也有需要适应的地方，节奏确实不慢，需要自己主动推进事情。整体来说，目前体验比秋招时想象的要好。"
        ],
        tags: ["#小红书校招", "#校招入职", "#小红书福利", "#应届生求职", "#打工日记"],
        publishedAt: "编辑于 11-05 北京",
        stats: { likes: 486, stars: 129, comments: 6 },
        comments: [
          {
            id: "c1",
            author: "阿橘",
            avatar: "橘",
            avatarColor: "#d4a58b",
            content: "新人有机会参与从想法到上线的项目，不是只做边角料，这一点对校招生挺重要。",
            time: "11-05 上海",
            likes: 128,
            isAuthorReply: false,
            replies: [
              { author: "玛卡巴卡唔西", content: "是的，这点我也挺惊喜的，能自己推进一小块事情真的很不一样。" }
            ]
          },
          {
            id: "d1",
            author: "momo",
            avatar: "m",
            avatarColor: "#c9b39a",
            content: "想问一下校招技术岗的薪资大概是什么区间呀？方便说的话想参考一下。",
            time: "11-05 上海",
            likes: 36,
            isAuthorReply: false,
            replies: [
              { author: "玛卡巴卡唔西", content: "我是非技术岗，技术岗听说分白菜、SP、SSP 几档，总包区间差别挺大的，建议直接问 HR 对应岗位的档位。" },
              { author: "路人甲", content: "同问，听说还有签字费，不过具体还是看 offer。" }
            ]
          },
          {
            id: "d2",
            author: "一颗柠檬",
            avatar: "柠",
            avatarColor: "#9dbfa1",
            content: "每个月 335 积分够换零食吗？感觉我可能会不太够哈哈。",
            time: "11-05 杭州",
            likes: 21,
            isAuthorReply: false,
            replies: [
              { author: "玛卡巴卡唔西", content: "我不太吃零食，三个月攒下来还换了周边；爱吃的同学确实可能不太够。" }
            ]
          },
          {
            id: "d3",
            author: "秋招人",
            avatar: "秋",
            avatarColor: "#b39cc9",
            content: "免费早餐是每天都有吗？十点之后去还有没有呀。",
            time: "11-06 北京",
            likes: 18,
            isAuthorReply: false,
            replies: [
              { author: "玛卡巴卡唔西", content: "工作日十点前可以去餐柜领，去晚了就看还有没有剩余啦，有时候会有多的。" }
            ]
          },
          {
            id: "d4",
            author: "阿柴",
            avatar: "柴",
            avatarColor: "#c9a27e",
            content: "校招生有房补吗？还有没有其他隐形福利，蹲一个真实分享。",
            time: "11-06 深圳",
            likes: 12,
            isAuthorReply: false,
            replies: [
              { author: "路人乙", content: "蹲一个，我也想知道不同城市是不是一样的。" }
            ]
          },
          {
            id: "d5",
            author: "小饼干",
            avatar: "饼",
            avatarColor: "#8fb2c9",
            content: "扁平是真的，我朋友在那边说 leader 就坐在旁边，有问题转头就能问。",
            time: "11-06 上海",
            likes: 9,
            isAuthorReply: false,
            replies: []
          }
        ]
      }
    },
    {
      id: "post-campus-3",
      title: "正式成为小红书校招生，终于结束了漫长的秋招",
      excerpt: "入职第一周的欢迎活动和团队氛围记录，给还在等offer的同学一点参考。",
      author: "大人",
      avatar: "大",
      avatarColor: "#c18696",
      likes: 119,
      ratio: "1.3",
      image: imageUrl("Vertical realistic photo of a creative technology company newcomer event, red lanyard and employee badge on a table, fashionable young Asian graduate in the background, bright red accents, lifestyle photography, no readable text")
    },
    {
      id: "post-campus-4",
      title: "一些秋招有感：目前的心态是躺又躺不平",
      excerpt: "拿offer之后的真实心态，聊聊业务变化、团队节奏和校招生的长期发展。",
      author: "Ethereal",
      avatar: "E",
      avatarColor: "#8db6a3",
      likes: 34,
      ratio: "0.92",
      image: imageUrl("Vertical moody photograph of an amber drink on a wooden cafe table beside a small notebook and an employee access card, soft bokeh, contemplative autumn mood, realistic lifestyle photography, no readable text")
    },
    {
      id: "post-campus-5",
      title: "校招入职三个月，聊聊团队氛围和真实工作强度",
      excerpt: "三个月里换过项目，也遇到过很愿意带人的导师，把感受写下来给后来人。",
      author: "一颗栗子",
      avatar: "栗",
      avatarColor: "#b99b7c",
      likes: 286,
      ratio: "0.88",
      image: imageUrl("Vertical realistic candid photo of young Asian colleagues collaborating around a table in a bright modern internet company office, laptops and sticky notes, friendly relaxed atmosphere, natural light, no readable text")
    },
    {
      id: "post-campus-6",
      title: "从实习到转正，记录我的校招时间线",
      excerpt: "实习转正的时间线和评估标准，以及关于晋升节奏的一些个人体感。",
      author: "小周",
      avatar: "周",
      avatarColor: "#9d9bc2",
      likes: 92,
      ratio: "1.18",
      image: imageUrl("Vertical top down realistic photograph of a neat desk with an open blank planner, laptop, pen, coffee and a red employee badge, soft morning light, campus to workplace theme, no readable text")
    }
  ];

  // 统一评论口径：10 条观点评论，7 条积极、3 条消极。
  // featured: 会话页精选展示；topics: 供正文引用角标按话题绑定。
  const campusComments = [
    {
      id: "c1",
      postId: "post-campus-2",
      sentiment: "positive",
      author: "阿橘",
      avatar: "橘",
      avatarColor: "#d4a58b",
      featured: true,
      likes: 128,
      replies: 12,
      excerpt: "新人有机会参与从想法到上线的项目",
      content: "新人有机会参与从想法到上线的项目，不是只做边角料，这一点对校招生挺重要。",
      topics: ["project", "growth"]
    },
    {
      id: "c2",
      postId: "post-campus-1",
      sentiment: "positive",
      author: "Seven",
      avatar: "S",
      avatarColor: "#8aa6c1",
      featured: true,
      likes: 96,
      replies: 8,
      excerpt: "薪资和日常福利对刚毕业的我有吸引力",
      content: "薪资和日常福利对刚毕业的我有吸引力，餐补和零食区都挺实在，具体还是要看offer。",
      topics: ["salary", "welfare"]
    },
    {
      id: "c3",
      postId: "post-campus-5",
      sentiment: "positive",
      author: "小满",
      avatar: "满",
      avatarColor: "#b99b7c",
      featured: true,
      likes: 74,
      replies: 6,
      excerpt: "导师会带着过一遍业务，问问题不会被嫌烦",
      content: "导师会带着过一遍业务，问问题不会被嫌烦，遇到愿意具体指导的人成长会快很多。",
      topics: ["mentor", "growth"]
    },
    {
      id: "c4",
      postId: "post-campus-3",
      sentiment: "positive",
      author: "月亮不睡",
      avatar: "月",
      avatarColor: "#9d9bc2",
      featured: true,
      likes: 61,
      replies: 5,
      excerpt: "免费三餐和零食积分，日常幸福感挺高",
      content: "免费三餐和零食积分，日常幸福感挺高，欢迎周也安排了比较完整的介绍。",
      topics: ["welfare", "activity"]
    },
    {
      id: "c5",
      postId: "post-campus-3",
      sentiment: "positive",
      author: "柚子",
      avatar: "柚",
      avatarColor: "#8db6a3",
      likes: 58,
      replies: 4,
      excerpt: "团队沟通很直接，打卡时间也相对灵活",
      content: "团队沟通很直接，打卡时间也相对灵活，同事年龄相近，讨论问题时不太绕弯子。",
      topics: ["pace", "culture"]
    },
    {
      id: "c6",
      postId: "post-campus-4",
      sentiment: "positive",
      author: "周末去散步",
      avatar: "周",
      avatarColor: "#c18696",
      likes: 43,
      replies: 3,
      excerpt: "宠物日和兴趣社团是加分项，氛围年轻",
      content: "宠物日和兴趣社团是加分项，整体氛围年轻，工作之外也能找到聊得来的人。",
      topics: ["activity", "culture"]
    },
    {
      id: "c7",
      postId: "post-campus-2",
      sentiment: "positive",
      author: "Kiko",
      avatar: "K",
      avatarColor: "#7fa8c9",
      likes: 39,
      replies: 2,
      excerpt: "项目节奏快，但能比较快看到工作成果",
      content: "项目节奏快，但能比较快看到工作成果，适合想在前两年多积累的人。",
      topics: ["project", "pace"]
    },
    {
      id: "c8",
      postId: "post-campus-6",
      sentiment: "negative",
      author: "晚风",
      avatar: "晚",
      avatarColor: "#b0869a",
      featured: true,
      likes: 45,
      replies: 7,
      excerpt: "项目机会多，但体感晋升路径不太明确",
      content: "项目机会多，但体感晋升路径不太明确，转正和后续成长的标准建议提前问清楚。",
      topics: ["promotion", "org"]
    },
    {
      id: "c9",
      postId: "post-campus-2",
      sentiment: "negative",
      author: "L",
      avatar: "L",
      avatarColor: "#9a9a9a",
      featured: true,
      likes: 22,
      replies: 3,
      excerpt: "主要靠自己问和摸索",
      content: "培训只覆盖基本流程，进入具体业务后主要靠自己问和摸索，主动性强的人会更适应。",
      topics: ["training", "growth"]
    },
    {
      id: "c10",
      postId: "post-campus-4",
      sentiment: "negative",
      author: "北海",
      avatar: "北",
      avatarColor: "#8db6a3",
      likes: 18,
      replies: 1,
      excerpt: "经历过业务方向调整，团队目标变化比较快",
      content: "经历过业务方向调整，团队目标变化比较快，项目冲刺时压力也会明显上来。",
      topics: ["org", "pace"]
    }
  ];

  // 观点模块下方的两段文字回复；本阶段不绑定任何评论引用。
  const campusReplySections = [
    {
      id: "campus-positive",
      title: "积极的一面",
      items: [
        {
          label: "成长机会多",
          text: "小红书的业务增长较快，项目机会较多，新人有机会参与具体项目、接触业务问题，并在实践中较快积累经验。",
          // after: 引用示意插在该句之后；本阶段仅做视觉标记。
          citation: { after: "较快积累经验。", extra: 2 }
        },
        {
          label: "团队氛围年轻",
          text: "部分校招生提到，小红书组织架构比较扁平，同事之间沟通比较直接，表达想法的门槛较低；遇到问题时，也有人愿意交流和帮忙。",
          citation: { after: "表达想法的门槛较低", extra: 2 }
        },
        {
          label: "好的导师很重要",
          text: "遇到愿意信任新人、适当放手的直属上级或 Mentor，对成长帮助很大。好的带教既能让新人独立尝试，也会在关键节点给出具体指导。"
        },
        {
          label: "薪资和福利有吸引力",
          text: "小红书的薪酬较高，在互联网企业中比较有吸引力，餐食、零食、员工活动等日常福利也很多。"
        }
      ]
    },
    {
      id: "campus-negative",
      title: "消极的一面",
      items: [
        {
          label: "可能缺乏系统培养",
          text: "也有校招生觉得，入职培训主要帮助了解基本流程，进入具体业务后仍要靠自己提问、找资料和摸索。如果期待明确、连续的培养路径，需要提前了解团队的带教安排。"
        },
        {
          label: "节奏快，容易感到压力",
          text: "有分享者提到目标推进和项目复盘的周期较短，部分团队可能按双月 OKR 节奏工作。需要持续交付阶段性结果时，工作压力会比较明显；不同岗位和业务阶段的强度并不相同。",
          citation: { after: "双月 OKR 节奏工作", extra: 2 }
        },
        {
          label: "内部协作可能不够顺畅",
          text: "部分分享者提到，跨团队沟通、职责边界或业务方向调整会影响项目推进。新人可能需要花时间理解协作链路，并适应变化。"
        }
      ]
    }
  ];

  const campusReply = {
    userQuestion: "校招生在小红书体验怎么样？",
    featuredPositive: ["c1", "c2", "c3", "c4"],
    featuredNegative: ["c8", "c9"],
    // 观点区仅该条评论可进入原帖详情，其余为纯展示。
    clickableCommentId: "c1",
    summaryChain: "总结38篇笔记生成",
    sections: campusReplySections,
    followUp: {
      text: "你主要关注的是哪类岗位呢？我可以帮你找更对口的校招生评价：",
      // 当前 Demo 仅「算法」开放追问，其余岗位保留展示但不可点击。
      options: [
        { label: "算法", enabled: true, replyId: "algorithm" },
        { label: "研发", enabled: false },
        { label: "产品", enabled: false },
        { label: "运营", enabled: false },
        { label: "其他职能", enabled: false }
      ]
    }
  };

  // 算法岗位专属演示数据：独立于全岗位评论，仅用于当前会话内追加回复。
  // 不参与评论聚合页、原帖详情页与引用角标，比例条与评论卡片均为静态展示。
  const algorithmComments = [
    { id: "algo-1", sentiment: "positive", excerpt: "能参与建模到上线的完整流程", likes: 128 },
    { id: "algo-2", sentiment: "positive", excerpt: "用户意图和多模态问题很具体", likes: 96 },
    { id: "algo-3", sentiment: "positive", excerpt: "研究积累能用到实际项目里", likes: 73 },
    { id: "algo-4", sentiment: "negative", excerpt: "离线提升，线上不一定有收益", likes: 84 },
    { id: "algo-5", sentiment: "negative", excerpt: "数据和工程工作比想象中多", likes: 62 }
  ];

  const algorithmReply = {
    id: "algorithm",
    userQuestion: "我想了解小红书算法岗位的校招体验",
    overview: "对算法岗校招生来说，搜推和模型相关的技术实践、完整的业务落地经历是吸引点；但实验结果的不确定性、工程工作占比和研究预期之间的差距，也可能影响体验，建议进一步了解具体方向与团队。",
    comments: algorithmComments,
    // 五条评论已全部展示，隐藏「全部评论」；比例条与评论卡片不绑定点击。
    showAllComments: false,
    clickable: false,
    sections: [
      {
        id: "algo-positive",
        title: "积极的一面",
        items: [
          {
            label: "有机会积累完整项目经验",
            text: "有分享者看重从建模、实验到效果复盘的实践过程。对校招生来说，这有助于理解算法如何影响真实产品，逐步建立模型效果与业务问题之间的联系。"
          },
          {
            label: "技术问题具体，能结合真实场景探索",
            text: "搜索、推荐等方向涉及用户意图、内容理解和个性化分发。部分分享者觉得，这类工作能把技术学习和具体问题结合起来，更容易理解自己在解决什么。"
          },
          {
            label: "专业积累有机会延续",
            text: "对已有序列建模、多模态或相关研究经历的同学，如果岗位方向匹配，过去的积累可能直接成为上手项目的基础。具体能做什么，仍要看实际分配的课题与项目。"
          }
        ]
      },
      {
        id: "algo-negative",
        title: "消极的一面",
        items: [
          {
            label: "实验投入不一定立即得到正向结果",
            text: "有分享者提到，离线指标提升后，线上实验仍可能没有达到预期。反复分析失败原因、调整方案，需要耐心，也可能带来阶段性的挫败感。"
          },
          {
            label: "工程和数据工作可能超出预期",
            text: "算法工作还包括数据处理、效果评估和问题排查。如果主要期待做模型研究，入职前需要问清研究、实验和工程工作各自的占比。"
          }
        ]
      }
    ],
    closing: "搜索、推荐与基础模型的工作重点有所不同，建议结合目标团队的具体项目、评价方式和带教安排进一步判断。"
  };

  // 虹桥进站攻略场景的独立帖子数据，仅用于该问题的搜推结果页，不参与校招场景。
  const hongqiaoPosts = [
    {
      id: "hq-post-1",
      title: "上海虹桥站5min极速进站攻略(2/10号线通用)",
      author: "&:吴可爱",
      avatar: "吴",
      avatarColor: "#d4a58b",
      date: "10-14",
      likes: 861,
      ratio: "1.12",
      image: imageUrl("Vertical smartphone photo inside a Shanghai metro train car, yellow line map sign above the door pointing to Hongqiao Railway Station, a hand pointing at the sign, crowded carriage, realistic snap, no readable text")
    },
    {
      id: "hq-post-2",
      title: "上海虹桥火车站 快速进站 地铁10号线 赶火车攻略",
      author: "比梨奇奥的梨",
      avatar: "梨",
      avatarColor: "#8aa6c1",
      date: "10-13",
      likes: 76,
      ratio: "1.28",
      image: imageUrl("Vertical realistic photo inside a metro carriage, overhead handrail and hanging handles, passengers with backpacks near the door, warm interior lighting, candid smartphone snapshot, no readable text")
    },
    {
      id: "hq-post-3",
      title: "上海10号线快速进虹桥火车站✅【收藏】6分钟极速进站",
      author: "Lion",
      avatar: "L",
      avatarColor: "#b99b7c",
      date: "03-30",
      likes: 1702,
      ratio: "1.2",
      image: imageUrl("Vertical realistic photo of a metro train door opening at an underground platform, station name sign above the platform screen door, yellow safety line on the floor, commuters waiting, no readable text")
    },
    {
      id: "hq-post-4",
      title: "赶上海虹桥站请进 周日下午六点实拍#狂奔",
      author: "As47",
      avatar: "A",
      avatarColor: "#9d9bc2",
      date: "04-26",
      likes: 25,
      ratio: "1.06",
      image: imageUrl("Vertical realistic crowded photo of a railway station entrance hall in China, passengers pulling suitcases and hurrying, departure information screens glowing, motion blur, documentary style, no readable text")
    },
    {
      id: "hq-post-5",
      title: "从虹桥2号航站楼下车走到虹桥火车站要多久",
      author: "momo",
      avatar: "m",
      avatarColor: "#8db6a3",
      date: "09-21",
      likes: 328,
      ratio: "1.3",
      image: imageUrl("Vertical realistic photo of a long indoor walkway inside a Chinese airport railway hub, moving walkway on one side, direction signage overhead, travelers with luggage in the distance, bright ceiling lights, no readable text")
    },
    {
      id: "hq-post-6",
      title: "带行李箱从10号线到1-15号检票口实走记录",
      author: "阿橘",
      avatar: "橘",
      avatarColor: "#c18696",
      date: "10-02",
      likes: 154,
      ratio: "1.18",
      image: imageUrl("Vertical realistic first person view of a traveler with a rolling suitcase walking toward ticket gates inside a large Chinese railway station, illuminated gate numbers above, polished floor reflections, no readable text")
    }
  ];

  // 攻略浮窗中的精选帖子：内容与图片均取自用户提供的截图，不再生成新图。
  const guideSheetPosts = [
    {
      id: "hq-sheet-1",
      title: "中秋十一虹桥站进站攻略（10号线）",
      excerpt: "出发时间2026.9.24，适合乘坐10号线，检票口1-14…",
      author: "小刘",
      avatar: "刘",
      avatarColor: "#7d8a99",
      date: "09-24",
      likes: 23,
      comments: 4,
      image: "assets/sheet-post-1.jpg"
    },
    {
      id: "hq-sheet-2",
      title: "虹桥火车站速通攻略",
      excerpt: "上海虹桥火车站·地铁速通极简攻略（8分钟极速…",
      author: "爱生活的漫漫",
      avatar: "漫",
      avatarColor: "#8ca7a1",
      date: "04-23",
      likes: 262,
      comments: 18,
      image: "assets/sheet-post-2.jpg"
    },
    {
      id: "hq-sheet-3",
      title: "上海虹桥火车站快速进站攻略来了",
      excerpt: "不管你是2号线还是10号线 从虹桥2号航站楼地铁站下车…",
      author: "小王今天出去玩了吗",
      avatar: "王",
      avatarColor: "#b9927e",
      date: "04-09",
      likes: 1299,
      comments: 96,
      image: "assets/sheet-post-3.jpg"
    }
  ];

  // “985商科生转算法攻略”场景的独立帖子数据，封面取自用户提供的截图。
  const processPosts = [
    {
      id: "proc-post-1",
      title: "文科/商科转算法面试基础八股和手撕 由于主…",
      author: "Jay",
      avatar: "J",
      avatarColor: "#8c9aae",
      date: "05-25",
      likes: 168,
      ratio: "0.75",
      image: "assets/process-post-1.jpg"
    },
    {
      id: "proc-post-2",
      title: "商科转码 | 我的转码 timeline 下面是我的…",
      author: "三分甜",
      avatar: "三",
      avatarColor: "#c99a7a",
      date: "01-03",
      likes: 123,
      ratio: "0.75",
      image: "assets/process-post-2.jpg"
    },
    {
      id: "proc-post-3",
      title: "商科转码路径分享 | 五个月上岸大模型算法…",
      author: "gjl",
      avatar: "g",
      avatarColor: "#7f9fc0",
      date: "2025-05-29",
      likes: 105,
      ratio: "0.75",
      image: "assets/process-post-3.jpg"
    },
    {
      id: "proc-post-4",
      title: "商科转算法成功回忆录之学习路线 BG：CQU…",
      author: "巴啦啦",
      avatar: "巴",
      avatarColor: "#9bb39a",
      date: "07-08",
      likes: 522,
      ratio: "0.75",
      image: "assets/process-post-4.jpg"
    }
  ];

  // “985商科生转算法攻略”精选浮窗帖子，文案与图片均取自用户提供的截图。
  const processSheetPosts = [
    {
      id: "proc-sheet-1",
      author: "Jay",
      avatar: "J",
      avatarColor: "#8c9aae",
      title: "商科/文科转算法经验",
      excerpt: "主包本身就是一个普通211经济学类的大学生，保研到了985的应统专业，通过自学成功拿到了大…",
      image: "assets/process-sheet-1.jpg",
      imageWidth: "two-thirds",
      date: "05-17",
      likes: 993,
      comments: 24
    },
    {
      id: "proc-sheet-2",
      author: "lior",
      avatar: "l",
      avatarColor: "#c9a27e",
      title: "转码保研极限 1 年 3 算法实习经验贴",
      excerpt: "简单记录一下自己的转行经历。本科金融专业，前期做金融时序相关方向，后期…",
      image: "assets/process-sheet-2.jpg",
      imageWidth: "one-third",
      date: "07-18",
      likes: 596,
      comments: 18
    },
    {
      // 评论贴：无图片，展示评论原文与来源帖子。
      id: "proc-sheet-3",
      type: "comment",
      author: "阿橘",
      avatar: "橘",
      avatarColor: "#d4a58b",
      title: "如何找到第一段搜广推实习",
      commentText: "研二上开始学来得及的，机器学习部分可以跳过，做搜广推的话建议直接做一个生成式的项目。… 算法实习段数不太重要，做一份不打杂的工作比较重要",
      likes: 128,
      comments: 12
    }
  ];

  const questions = [
    {
      id: "campus-experience",
      label: "校招生在小红书体验怎么样？",
      type: "subjective",
      typeLabel: "类型1：体验判断",
      status: "ready",
      data: {
        overview: {
          summary: "对校招生来说，小红书的薪酬福利、年轻氛围是亮点；但在晋升空间、组织变化和培训支持方面的观点存在分歧，建议结合岗位与团队进一步判断。",
          evidence: "基于 38 篇相关笔记与 128 条评论整理 · 近一年"
        },
        comments: campusComments,
        feed: campusPosts,
        reply: campusReply
      }
    },
    {
      id: "hongqiao-station-guide",
      label: "10号线到虹桥火车站1号口快速进站攻略",
      type: "objective",
      typeLabel: "类型2：明确答案",
      status: "ready",
      data: {
        guide: {
          summary: "要去虹桥火车站1号口附近，最快速的方法是提前一站，在‘虹桥2号航站楼’站下车。这条路线人少，小跑5–7分钟就能到达检票口。",
          entryLabel: "快速进站攻略",
          // 攻略详情页尚未开发，点击入口时仅提示占位文案。
          entryPlaceholder: "完整攻略待完善",
          nextSectionTitle: "（一）地铁下车与出站",
          summaryCount: 42,
          sheetPosts: guideSheetPosts,
          // 点点对话页中的攻略正文
          answer: {
            title: "快速进站攻略",
            sections: [
              {
                id: "arrive",
                title: "（一）地铁下车与出站",
                items: [
                  { label: "关键一站", text: "乘坐10号线时，务必在“虹桥2号航站楼”站下车。" },
                  { label: "车厢选择", text: "为了最快到达扶梯或楼梯，可以在以下车厢等候：" },
                  { label: "8号车厢", text: "这是最靠近扶梯的位置，下车后一出来就是通往C/D区出口的方向。" },
                  { label: "其他选择", text: "10号线的05/06号门、12/13号门也靠近扶梯或直梯，可以根据站台指示选择。" },
                  { label: "注意方向", text: "10号线有开往“航中路”和“虹桥火车站”两个方向的列车，上车前一定要确认终点站是“虹桥火车站”，如果坐错，最晚在“龙溪路”站需要下车换乘。" }
                ]
              },
              {
                id: "transfer",
                title: "（二）站内换乘路线",
                intro: "从“虹桥2号航站楼”站出站后，跟着以下指引走，全程有清晰的指示牌。",
                steps: [
                  {
                    text: "出站后，你会看到通往火车站的扶梯和直梯，直接上楼到3楼（当前楼层为B1）。",
                    image: "assets/guide-exit.jpg",
                    imageAlt: "虹桥2号航站楼站出站验票与直梯位置示意图"
                  },
                  { text: "出电梯后，抬头寻找“火车”或“火车站”的指示牌，然后跟着牌子一直走。" },
                  { text: "路上会经过几段助力扶梯，可以省力不少，跟着人流走就行。" },
                  { text: "最终会到达一个玻璃门入口，这就是火车站的东进站口，进去后就是安检口。" }
                ]
              },
              {
                id: "ticket",
                title: "（三）进站与检票",
                items: [
                  { label: "安检口", text: "这个入口进去后，紧邻的就是1号检票口区域。" },
                  { label: "检票口分布", text: "进入候车大厅后，检票口1在最东边，检票口15在中间，检票口29在最西边。所以从这个口进，去1号口是最近的。" },
                  { label: "时间预估", text: "熟悉路线后，小跑5-7分钟就能到达检票口，正常步行大约10分钟。" }
                ]
              }
            ]
          }
        },
        feed: hongqiaoPosts
      }
    },
    {
      id: "business-to-algorithm",
      label: "985商科生转算法攻略",
      type: "process",
      typeLabel: "类型3：过程探索",
      status: "ready",
      data: {
        guide: {
          summary: "985商科背景转算法，完全可行！你的统计学和数据基础其实是优势。关键在于规划好路径，一步步补足短板。结合多位过来人的经验，为你整理了一份可执行的攻略。",
          // 卡片底部文案与其他场景不同，由配置控制。
          footerLabel: "为您精选全网帖子和评论生成",
          nextSectionTitle: "🗺️ 规划你的转码路径",
          // 点点回复页顶部的精选入口，配置后替代默认的“总结 N 篇笔记生成”。
          sourceEntry: "为您精选全网帖子和评论生成",
          sheetPosts: processSheetPosts,
          // 点点回复页正文，按块渲染以保留标题层级。
          answer: {
            title: "985商科生转算法攻略",
            sections: [
              {
                title: "🗺️ 规划你的转码路径",
                blocks: [
                  { type: "paragraph", text: "对于商科生来说，最稳妥的路径不是直接冲击算法岗，而是“曲线救国”。" },
                  { type: "subheading", text: "第一步：从数据岗实习切入" },
                  { type: "paragraph", text: "第一份实习的目标是进入互联网行业，接触代码和数据工作。数据分析（DA）、数据科学（DS）或商业分析（BA）是绝佳的跳板。这些岗位与商科知识有重合，门槛相对较低，能让你在实践中积累项目经验，证明自己的代码能力。" },
                  { type: "subheading", text: "第二步：在职学习，积累算法项目" },
                  { type: "paragraph", text: "在数据岗实习期间，不要只埋头干活。主动思考如何用更高级的模型优化工作，同时利用业余时间系统学习算法知识，并动手做项目。" },
                  { type: "subheading", text: "第三步：梯度进阶，冲击算法岗" },
                  { type: "paragraph", text: "有了数据岗的实习背书，就可以开始投递中小厂的算法实习了。通过实习积累经验后，再逐步向大厂的算法核心岗位发起冲击。" }
                ]
              },
              {
                title: "📚 构建你的知识体系",
                blocks: [
                  { type: "paragraph", text: "理论学习是基础，但一定要以实践为导向。" },
                  { type: "subheading", text: "编程与工具" },
                  {
                    type: "list",
                    items: [
                      { label: "Python", text: "这是算法领域的通用语言。可以从菜鸟教程等网站入门，然后重点学习NumPy、Pandas等数据处理库。" },
                      { label: "SQL", text: "数据岗的必备技能。建议刷完牛客网的SQL篇，做到熟练编写查询语句。" },
                      { label: "LeetCode", text: "算法岗面试的硬门槛。不用追求难题，把Hot 100和面试经典150题刷熟，保证面试时能流畅写出代码即可。" }
                    ]
                  },
                  { type: "subheading", text: "核心理论" },
                  {
                    type: "list",
                    items: [
                      { label: "机器学习", text: "这是地基。强烈推荐吴恩达的机器学习课程，帮你建立完整的知识体系。重点理解线性回归、逻辑回归、决策树、GBDT等经典算法的原理和应用场景。" },
                      { label: "深度学习", text: "在掌握机器学习后，可以进入深度学习。推荐李沐的《动手学深度学习》和“小土堆”的PyTorch教程，理论与实践结合，非常适合入门。" },
                      { label: "数学基础", text: "你的商科背景通常包含概率论和统计学知识，这是优势。需要补充的主要是线性代数和微积分，重点理解其几何意义和在算法中的应用。" }
                    ]
                  }
                ]
              },
              {
                title: "💼 打造你的核心竞争力",
                blocks: [
                  { type: "paragraph", text: "简历上的项目经历是决定你能否拿到面试的关键。" },
                  {
                    type: "list",
                    items: [
                      { label: "项目贵精不贵多", text: "与其堆砌三个烂尾项目，不如吃透一个。可以从Kaggle、天池等平台的比赛中找选题，或者复现经典论文。" },
                      { label: "发挥商科背景优势", text: "不要完全抛弃你的专业。可以尝试“金融+AI”的交叉项目，比如做金融领域的模型微调、时序数据预测等。这种复合背景在求职时非常受欢迎，尤其是在风控算法等方向。" },
                      { label: "紧跟技术热点", text: "目前大模型（LLM）是绝对的风口。可以准备一个大模型应用项目，比如搭建一个基于RAG的问答系统或一个Agent项目。即使不完美，其中的思考和迭代过程也是面试时的加分项。" }
                    ]
                  }
                ]
              }
            ]
          }
        },
        feed: processPosts
      }
    }
  ];

  const normalizeQuery = (value) => String(value || "").trim();

  const getQuestions = () => questions;

  const getQuestionById = (id) => questions.find((item) => item.id === id) || null;

  const getQuestionByText = (text) => {
    const query = normalizeQuery(text);
    if (!query) return null;
    return questions.find((item) => item.label === query) || null;
  };

  const getQuestionIdFromUrl = () => new URLSearchParams(window.location.search).get("question");

  const getQuestionFromUrl = () => getQuestionById(getQuestionIdFromUrl());

  const getInvalidQuestionFromUrl = () => {
    const id = getQuestionIdFromUrl();
    if (!id) return null;
    return getQuestionById(id) ? null : id;
  };

  // 观点比例统一按评论观点标签计算，供全岗位与算法场景复用。
  const calcOpinionDistribution = (comments) => {
    const list = comments || [];
    const total = list.length;
    const positive = list.filter((comment) => comment.sentiment === "positive").length;
    const negative = list.filter((comment) => comment.sentiment === "negative").length;
    return {
      total,
      positive,
      negative,
      positivePercent: total ? Math.round((positive / total) * 100) : 0,
      negativePercent: total ? Math.round((negative / total) * 100) : 0
    };
  };

  const getOpinionDistribution = (question) => calcOpinionDistribution(question?.data?.comments);

  // 算法回复：比例、左右两列评论均由独立 mock 数据计算得出。
  const getAlgorithmReply = () => {
    if (!algorithmReply) return null;
    return {
      ...algorithmReply,
      opinion: calcOpinionDistribution(algorithmReply.comments),
      positiveComments: algorithmReply.comments.filter((comment) => comment.sentiment === "positive"),
      negativeComments: algorithmReply.comments.filter((comment) => comment.sentiment === "negative")
    };
  };

  const getCommentById = (question, commentId) =>
    (question?.data?.comments || []).find((comment) => comment.id === commentId) || null;

  const getPostById = (question, postId) =>
    (question?.data?.feed || []).find((post) => post.id === postId) || null;

  const getCommentsByPost = (question, postId) =>
    (question?.data?.comments || []).filter((comment) => comment.postId === postId);

  const getCommentCards = (question, sentiment = "all") => {
    const comments = question?.data?.comments || [];
    return comments
      .filter((comment) => sentiment === "all" || comment.sentiment === sentiment)
      .map((comment) => ({
        ...comment,
        postTitle: getPostById(question, comment.postId)?.title || ""
      }));
  };

  const getFeaturedComments = (question) => {
    const reply = question?.data?.reply;
    if (!reply) return { positive: [], negative: [] };
    return {
      positive: reply.featuredPositive.map((id) => getCommentById(question, id)).filter(Boolean),
      negative: reply.featuredNegative.map((id) => getCommentById(question, id)).filter(Boolean)
    };
  };

  const getReplySections = (question) => question?.data?.reply?.sections || [];

  const buildDiandianUrl = (questionId) => `diandian.html?question=${encodeURIComponent(questionId)}`;

  const buildCommentsUrl = (questionId) => `comments.html?question=${encodeURIComponent(questionId)}`;

  const buildPostUrl = (questionId, postId, commentId) =>
    `post.html?question=${encodeURIComponent(questionId)}&postId=${encodeURIComponent(postId)}&commentId=${encodeURIComponent(commentId)}`;

  const buildSearchUrl = (questionId) =>
    questionId ? `index.html?question=${encodeURIComponent(questionId)}` : "index.html";

  return {
    getQuestions,
    getQuestionById,
    getQuestionByText,
    getQuestionFromUrl,
    getInvalidQuestionFromUrl,
    getOpinionDistribution,
    getCommentById,
    getPostById,
    getCommentsByPost,
    getCommentCards,
    getFeaturedComments,
    getReplySections,
    getAlgorithmReply,
    buildDiandianUrl,
    buildCommentsUrl,
    buildPostUrl,
    buildSearchUrl,
    normalizeQuery
  };
})();
