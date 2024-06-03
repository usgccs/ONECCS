import { useState, useEffect } from 'react';

function FlowchartList(prop) {
    let flowchartObj = prop.flowchartList;

    return (
        <div className="px-4 collapse collapse-plus join-item bg-[#23453d] lg:basis-5/12">
            <input type="checkbox" name="flowcharts" />
            <div className="text-xl font-medium text-white collapse-title">ID {flowchartObj.idNum}</div>
            <div className="flex flex-wrap justify-center gap-4 collapse-content">
                {flowchartObj.flowcharts.map((fci, index) => {
                    return <a className='w-2/5 w-full p-1 font-medium leading-normal text-center text-black bg-white rounded md:basis-1/5 text-nowrap'
                        key={index} href={fci.url} target='_blank'>
                        {fci.degCode}
                    </a>
                })}
            </div>
        </div>
    )
}

function FlowchartSection() {
    // TODO: Find a way to host the entire object below on Contentful
    const flowchartsList = [
        {
            idNum: 123,
            flowcharts: [
                { degCode: "BSCS-ST", url: "https://drive.google.com/file/d/1nN2N-jea0yiGIMaqdpL-Yv4Wu7D3sO55/view" },
                { degCode: "BSCS-NIS", url: "https://drive.google.com/file/d/1dAJASb4z40UTHut-zVogjYsSSbHFxjK4/view" },
                { degCode: "BS-CSE", url: "https://drive.google.com/file/d/1zX7A3W0y2Yfx5mL4j7AfYqlqlIrsCpJx/view" },
                { degCode: "BSMS-CS", url: "https://drive.google.com/file/d/1BD_-lsbkC3oEgu93-XwMkwiZZGc5Mc6_/view" },
                { degCode: "IET-GD", url: "https://drive.google.com/file/d/1guNov1Do3ZsFnsnIBl32JhOflKFkLHdA/view" },
                { degCode: "IET-AD", url: "https://drive.google.com/file/d/1aLHqlvWQEdkahdm64hoXTT80zB9inXKq/view" },
                { degCode: "BSIT", url: "https://drive.google.com/file/d/1bdRolrDT2L-nmONjitHg51xgf2c-ZUry/view" },
                { degCode: "BSIS", url: "https://drive.google.com/file/d/1-e6_1bijtGq05mMPkf2uSMvKKTer4ZqM/view" }
            ]
        }, {
            idNum: 122,
            flowcharts: [
                { degCode: "BSCS-ST", url: "https://drive.google.com/file/d/1XK_kBxvnEvPAShHqZaYbnbxHvuMkKB7l/view" },
                { degCode: "BSCS-NIS", url: "https://drive.google.com/file/d/1i5U4XIX98gmYM639ZrAM2CAGXMPvlXtb/view" },
                { degCode: "BS-CSE", url: "https://drive.google.com/file/d/1aV228PxNVFrdmz_LZC-UWJ96YvClhNMU/view" },
                { degCode: "BSMS-CS", url: "https://drive.google.com/file/d/1_LVawFC_02_hMQld-HImTiJcMB6X2_0m/view" },
                { degCode: "IET-GD", url: "https://drive.google.com/file/d/1QTLLMiX9_wPzuAuiuUg_Dd0ZoBZn5mkT/view" },
                { degCode: "IET-AD", url: "https://drive.google.com/file/d/1YUgx9GoaEqhJikJvJ-BdD9tgWI-a2uiF/view" },
                { degCode: "BSIT", url: "https://drive.google.com/file/d/1nVQPlbdRDS7UaaeC23Rkj-VgcOyQ0mcA/view" },
                { degCode: "BSIS", url: "https://drive.google.com/file/d/1K0PH3J52aQAukZW78WYcglz6-M6kQfr3/view" }
            ],
        }, {
            idNum: 121,
            flowcharts: [
                { degCode: "BSCS-ST", url: "https://drive.google.com/file/d/1T-eEChO_w3xDGTpQdR57lxzCb-YKdF08/view" },
                { degCode: "BSCS-NIS", url: "https://drive.google.com/file/d/1tb68zM01QN2nNQYdfwxUGoEER6cx_eEL/view" },
                { degCode: "BS-CSE", url: "https://drive.google.com/file/d/1UdokxqguUlxqj8DOQN_pBY2A7NH2cz9j/view" },
                { degCode: "BSMS-CS", url: "https://drive.google.com/file/d/19ONJAGbuc7vpvq_QOTpnEfXsrU-OfGeJ/view" },
                { degCode: "IET-GD", url: "https://drive.google.com/file/d/1l-T2dw7zn-8LjTtfzUh-2MjHnTREbR5N/view" },
                { degCode: "IET-AD", url: "https://drive.google.com/file/d/1JicKsdGoc7nNsxypwRehZWktika9Ng4x/view" },
                { degCode: "BSIT", url: "https://drive.google.com/file/d/1tLcQprU5uXUjlwkqWBYC5ttS_0OakRAu/view" },
                { degCode: "BSIS", url: "https://drive.google.com/file/d/1cF_n0vgA_wlZD2t7GZNtqozrRg5yRAyz/view" }
            ],
        }, {
            idNum: 120,
            flowcharts: [
                { degCode: "BSCS-ST", url: "https://drive.google.com/file/d/1RnY6TM3_cLOI9OqNgDiVQoh5Kqe4SpBc/view" },
                { degCode: "BSCS-NIS", url: "https://drive.google.com/file/d/1JLlZGbQEW0EUnpp7M-u6CwVv6614jbYP/view" },
                { degCode: "BS-CSE", url: "https://drive.google.com/file/d/1kkvtZ0zhvecHUU3vvsNBOdojvSVE4wu_/view" },
                { degCode: "BSMS-CS", url: "https://drive.google.com/file/d/11sEJgfppWrWmGCLbGVsXutWdZRJlEdyl/view" },
                { degCode: "IET-GD", url: "https://drive.google.com/file/d/1R_lfEwk-MAkFCikJhzlTp3Cfh1KLIVbo/view" },
                { degCode: "IET-AD", url: "https://drive.google.com/file/d/1IRhzx0XU3jzkkxlQnLvvzWOGQu8aHxsl/view" },
                { degCode: "BSIT", url: "https://drive.google.com/file/d/1_d0xqLLm6uNjVrAfaiLp1pKz-03jFaJx/view" },
                { degCode: "BSIS", url: "https://drive.google.com/file/d/1gZ4Kf5m7xkjHLor_OvISfy3ZaPE97GNd/view" }
            ]
        }, {
            idNum: 119,
            flowcharts: [
                { degCode: "BSCS-ST", url: "https://drive.google.com/file/d/1ZFA9z4tPm7_23dwagEhZwGqME_AS11AJ/view" },
                { degCode: "BSCS-NIS", url: "https://drive.google.com/file/d/1aE-AhCXDL_QjZpwUFnz1b5XkhKsX2RMN/view" },
                { degCode: "BS-CSE", url: "https://drive.google.com/file/d/1qgX2CB0mBPJ_VkNQPQo9D8vI4oydGk78/view" },
                { degCode: "BSMS-CS", url: "https://drive.google.com/file/d/18FKYkuKXU2dd4alGWal2aCQzB2hTxDxV/view" },
                { degCode: "IET-GD", url: "https://drive.google.com/file/d/1FsXHCzml0sj9XHOxUZUUX2ufu6dnnbtc/view" },
                { degCode: "IET-AD", url: "https://drive.google.com/file/d/1rk3Ylv_hpRbZEHntkyMk692z6DGvkE9e/view" },
                { degCode: "BSIT", url: "https://drive.google.com/file/d/1G1b8LCKzCTXNC8NU8M18OyDMsIPrHJjq/view" },
                { degCode: "BSIS", url: "https://drive.google.com/file/d/1U9nxKzmPWU8QPEO41ubCGofK0JYbTzzj/view" }
            ]
        }
    ]


    return (<>
        <div className="p-10 text-center">
            <h1 className="font-black">Flowcharts</h1>
            <p>Access with your DLSU Email<br></br>Do not request access with non-DLSU email accounts</p>
        </div>
        <div className="flex flex-col flex-wrap items-start justify-center w-full gap-4 sm:flex-row">
            {flowchartsList.map((fcl, index) => { return <FlowchartList key={index} flowchartList={fcl} isDefault={index == 0} /> })}
        </div>
    </>
    )
}

export default FlowchartSection;