// ==================== //
// DOM Elements
// ==================== //

const form = document.getElementById('sleepForm');
const outputSection = document.getElementById('outputSection');
const outputText = document.getElementById('output');
const copyBtn = document.getElementById('copyBtn');

// Conditional field containers
const napDetails = document.getElementById('napDetails');
const exerciseDetails = document.getElementById('exerciseDetails');
const lateSnackDetails = document.getElementById('lateSnackDetails');
const tvVideoDetails = document.getElementById('tvVideoDetails');
const readingDetails = document.getElementById('readingDetails');
const yutaponDetails = document.getElementById('yutaponDetails');
const stretchDetails = document.getElementById('stretchDetails');
const humidifierDetails = document.getElementById('humidifierDetails');

// ==================== //
// Toggle Conditional Fields
// ==================== //

// Nap toggle
document.querySelectorAll('input[name="nap"]').forEach(radio => {
    radio.addEventListener('change', (e) => {
        if (e.target.value === 'あり') {
            napDetails.classList.remove('hidden');
        } else {
            napDetails.classList.add('hidden');
        }
    });
});

// Exercise toggle
document.querySelectorAll('input[name="exercise"]').forEach(radio => {
    radio.addEventListener('change', (e) => {
        if (e.target.value === 'あり') {
            exerciseDetails.classList.remove('hidden');
        } else {
            exerciseDetails.classList.add('hidden');
        }
    });
});

// Late snack toggle
document.querySelectorAll('input[name="lateSnack"]').forEach(radio => {
    radio.addEventListener('change', (e) => {
        if (e.target.value === 'あり') {
            lateSnackDetails.classList.remove('hidden');
        } else {
            lateSnackDetails.classList.add('hidden');
        }
    });
});

// TV/Video toggle
document.querySelectorAll('input[name="tvVideo"]').forEach(radio => {
    radio.addEventListener('change', (e) => {
        if (e.target.value === 'あり') {
            tvVideoDetails.classList.remove('hidden');
        } else {
            tvVideoDetails.classList.add('hidden');
        }
    });
});

// Reading toggle
document.querySelectorAll('input[name="reading"]').forEach(radio => {
    radio.addEventListener('change', (e) => {
        if (e.target.value === 'あり') {
            readingDetails.classList.remove('hidden');
        } else {
            readingDetails.classList.add('hidden');
        }
    });
});

// Yutapon toggle
document.querySelectorAll('input[name="yutapon"]').forEach(radio => {
    radio.addEventListener('change', (e) => {
        if (e.target.value === '使用あり') {
            yutaponDetails.classList.remove('hidden');
        } else {
            yutaponDetails.classList.add('hidden');
        }
    });
});

// Stretch toggle
document.querySelectorAll('input[name="stretch"]').forEach(radio => {
    radio.addEventListener('change', (e) => {
        if (e.target.value === 'あり') {
            stretchDetails.classList.remove('hidden');
        } else {
            stretchDetails.classList.add('hidden');
        }
    });
});

// Humidifier toggle
document.querySelectorAll('input[name="humidifier"]').forEach(radio => {
    radio.addEventListener('change', (e) => {
        if (e.target.value === 'あり') {
            humidifierDetails.classList.remove('hidden');
        } else {
            humidifierDetails.classList.add('hidden');
        }
    });
});

// Bath type toggle
const bathDetails = document.getElementById('bathDetails');
document.querySelectorAll('input[name="bathType"]').forEach(radio => {
    radio.addEventListener('change', (e) => {
        if (e.target.value === '入浴') {
            bathDetails.classList.remove('hidden');
        } else {
            bathDetails.classList.add('hidden');
        }
    });
});

// AC toggle
const acDetails = document.getElementById('acDetails');
document.querySelectorAll('input[name="ac"]').forEach(radio => {
    radio.addEventListener('change', (e) => {
        if (e.target.value === 'あり') {
            acDetails.classList.remove('hidden');
        } else {
            acDetails.classList.add('hidden');
        }
    });
});

// Report type toggle
const morningReportSections = document.getElementById('morningReportSections');
const nightReportSections = document.getElementById('nightReportSections');
document.querySelectorAll('input[name="reportType"]').forEach(radio => {
    radio.addEventListener('change', (e) => {
        if (e.target.value === '朝の報告') {
            morningReportSections.classList.remove('hidden');
            nightReportSections.classList.add('hidden');
        } else {
            morningReportSections.classList.add('hidden');
            nightReportSections.classList.remove('hidden');
        }
    });
});

// Night waking dynamic forms
const nightWakingCountInput = document.getElementById('nightWakingCount');
const nightWakingDetailsContainer = document.getElementById('nightWakingDetailsContainer');

nightWakingCountInput.addEventListener('change', (e) => {
    const count = parseInt(e.target.value) || 0;
    nightWakingDetailsContainer.innerHTML = ''; // Clear existing forms

    for (let i = 1; i <= count; i++) {
        const formGroup = document.createElement('div');
        formGroup.className = 'nested-group';
        formGroup.style.marginBottom = '1rem';
        formGroup.style.padding = '1rem';
        formGroup.style.background = 'rgba(255, 255, 255, 0.03)';
        formGroup.style.borderRadius = '8px';

        formGroup.innerHTML = `
            <h4 style="margin-bottom: 0.5rem; font-size: 0.9rem; color: #a4b0be;">${i}回目</h4>
            <div class="form-group">
                <label for="nightWakingTime${i}">時刻</label>
                <div style="display: flex; flex-direction: column; gap: 0.5rem;">
                    <input type="time" id="nightWakingTime${i}" name="nightWakingTime${i}">
                    <label style="display: flex; align-items: center; gap: 0.5rem; color: #a4b0be; font-size: 0.9rem; cursor: pointer;">
                        <input type="checkbox" id="nightWakingUnknown${i}" name="nightWakingUnknown${i}" value="不明">
                        時刻不明
                    </label>
                </div>
            </div>
            <div class="form-group">
                <label for="nightWakingMethod${i}">再入眠の難度と手段</label>
                <div class="radio-group" style="flex-direction: column; align-items: flex-start; gap: 0.5rem;">
                    <label class="radio-label"><input type="radio" name="nightWakingMethod${i}" value="すぐ" checked><span>すぐ</span></label>
                    <label class="radio-label"><input type="radio" name="nightWakingMethod${i}" value="１０分以上"><span>１０分以上</span></label>
                    <label class="radio-label"><input type="radio" name="nightWakingMethod${i}" value="ラジオ等を聞いた後"><span>ラジオ等を聞いた後</span></label>
                </div>
            </div>
        `;
        nightWakingDetailsContainer.appendChild(formGroup);

        // Disable time input if "Unknown" is checked
        const unknownCheck = document.getElementById(`nightWakingUnknown${i}`);
        const timeInput = document.getElementById(`nightWakingTime${i}`);
        unknownCheck.addEventListener('change', (e) => {
            timeInput.disabled = e.target.checked;
            if (e.target.checked) timeInput.value = '';
        });
    }
});

// ==================== //
// Form Submission
// ==================== //

form.addEventListener('submit', (e) => {
    e.preventDefault();

    const formData = new FormData(form);
    const data = Object.fromEntries(formData.entries());

    // Generate summary text based on report type
    let summary;
    if (data.reportType === '朝の報告') {
        summary = generateMorningSummary(data);
    } else {
        summary = generateNightSummary(data);
    }

    // Display output
    outputText.textContent = summary;
    outputSection.classList.remove('hidden');

    // Scroll to output
    outputSection.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
});

// ==================== //
// Generate Summary
// ==================== //

function generateMorningSummary(data) {
    let summary = '';

    // Date - format from YYYY-MM-DD to YYYY/M/D
    let dateStr = '';
    if (data.date) {
        const dateParts = data.date.split('-');
        const year = dateParts[0];
        const month = parseInt(dateParts[1], 10);
        const day = parseInt(dateParts[2], 10);
        dateStr = `${year}/${month}/${day}`;
    }
    summary += `日付：${dateStr}\n`;

    // Sleep images
    summary += `睡眠画像：スリープコイン　${data.sleepCoin || ''}／スマートバンド${data.smartBand || ''}\n`;

    // Wake time
    summary += `起床：時刻 ${data.morningWakeTime || ''}\n`;

    // Night waking
    const wakingCount = parseInt(data.nightWakingCount) || 0;
    summary += `途中覚醒：回数（${wakingCount}）回\n`;
    if (wakingCount > 0) {
        for (let i = 1; i <= wakingCount; i++) {
            const time = data[`nightWakingUnknown${i}`] ? '不明' : (data[`nightWakingTime${i}`] || '');
            const method = data[`nightWakingMethod${i}`] || '';
            const prefix = i === 1 ? '　　　　　　ある場合：' : '　　　　　　　　　　　';
            summary += `${prefix}時刻 ${time}、再入眠の難度と手段（${method}）\n`;
        }
    }

    // Morning environment
    // Morning feeling
    summary += `起床体感：体感：${data.morningComfort || ''}／目覚め：${data.wakeFeeling || ''}／頭：${data.morningHeadState || ''}／だるさ：${data.fatigue || ''}／眠気残り：${data.remainingSleepiness || ''}\n`;

    return summary;
}

function generateNightSummary(data) {
    let summary = '';

    // Date - format from YYYY-MM-DD to YYYY/M/D
    let dateStr = '';
    if (data.date) {
        const dateParts = data.date.split('-');
        const year = dateParts[0];
        const month = parseInt(dateParts[1], 10);
        const day = parseInt(dateParts[2], 10);
        dateStr = `${year}/${month}/${day}`;
    }
    summary += `日付：${dateStr}\n`;

    // Next morning alarm and daytime sleepiness
    summary += `翌朝のアラーム：${data.nextMorningAlarm || ''}\n`;
    summary += `昼の眠気の強さ：${data.daytimeSleepiness || ''}\n`;

    // Wake time and nap (Wake time removed)
    if (data.nap === 'あり') {
        summary += `昼寝：あり（時刻 ${data.napTime || ''}・${data.napDuration || ''}分）\n`;
    } else {
        summary += `昼寝：なし\n`;
    }

    // Exercise
    if (data.exercise === 'あり') {
        summary += `運動：あり／時刻：${data.exerciseTime || ''}／内容：${data.exerciseContent || ''}／強度：${data.exerciseIntensity || ''}／終了後：${data.afterExercise || ''}\n`;
    } else {
        summary += `運動：なし\n`;
    }

    // Dinner and Hydration
    summary += `夕食：内容（${data.dinnerContent || ''}）、時刻（${data.dinnerTime || ''}）、食事時間（${data.dinnerDuration || ''}）分\n`;
    summary += `カフェイン（14時以降）・アルコールの有無：${data.caffeineAlcohol || ''}\n`;
    summary += `水分補給：夕食後の量（${data.hydration || ''}）ml\n`;

    // Late snack
    if (data.lateSnack === 'あり') {
        summary += `就寝3時間以内の飲食：あり（${data.lateSnackContent || ''}）\n`;
    } else {
        summary += `就寝3時間以内の飲食：なし\n`;
    }

    // Bath
    if (data.bathType === '入浴') {
        summary += `入浴：時刻：${data.bathTime || ''}／湯温：${data.bathTemp || ''}℃／時間：${data.bathDuration || ''}分／入浴中の行動：${data.bathActivity || ''}\n`;
    } else {
        summary += `入浴：シャワー／時刻：${data.bathTime || ''}\n`;
    }

    // Digital use and aroma
    summary += `直近2hのデジタル使用：${data.digitalUse || ''}分\n`;
    summary += `報告前のオフ時間：${data.offTime || ''}分\n`;
    summary += `アロマ：${data.aroma || ''}\n`;

    // Pre-sleep activities
    let preSleepActs = [];
    if (data.hotEyeMask === 'あり') preSleepActs.push('ホットアイマスク');
    if (data.icePack === 'あり') preSleepActs.push('アイスノン');
    if (preSleepActs.length > 0) {
        summary += `就寝前行動：追加アイテム（${preSleepActs.join('、')}）\n`;
    }

    // Pre-sleep activities - TV/Video
    if (data.tvVideo === 'あり') {
        summary += `就寝前行動：TV・動画：あり（${data.tvVideoContent || ''}）`;
    } else {
        summary += `就寝前行動：TV・動画：なし`;
    }

    // Reading
    if (data.reading === 'あり') {
        summary += `／読書：あり（内容：${data.readingContent || ''}）\n`;
    } else {
        summary += `／読書：なし\n`;
    }

    // Yutapon
    if (data.yutapon === '使用あり') {
        summary += `ゆたぽん（首用）：使用あり（使用${data.yutaponDuration || ''}分）\n`;
    } else {
        summary += `ゆたぽん（首用）：使用なし\n`;
    }

    // Stretch
    if (data.stretch === 'あり') {
        summary += `ストレッチ：あり（種類 ${data.stretchType || ''}）\n`;
    } else {
        summary += `ストレッチ：なし\n`;
    }

    // Bedroom environment
    if (data.ac === 'あり') {
        summary += `寝室環境：エアコン：暖房（あり・${data.acTemp || ''}℃）`;
    } else {
        summary += `寝室環境：エアコン：暖房（なし）`;
    }

    if (data.humidifier === 'あり') {
        summary += `／加湿器：あり（${data.humidity || ''}％）`;
    } else {
        summary += `／加湿器：なし`;
    }
    summary += `／布団：${data.bedding || ''}／体感：${data.comfort || ''}\n`;

    // Current state
    summary += `今の状態：眠気：${data.sleepiness || ''}／頭：${data.headState || ''}／体の緊張：${data.tension || ''}／ストレス：${data.stress || ''}\n`;

    // Bedtime
    summary += `就寝予定時刻：${data.bedTime || ''}\n`;

    // Memo
    if (data.memo) {
        summary += `メモ：${data.memo}\n`;
    } else {
        summary += `メモ：\n`;
    }

    return summary;
}

// ==================== //
// Copy to Clipboard
// ==================== //

copyBtn.addEventListener('click', async () => {
    try {
        await navigator.clipboard.writeText(outputText.textContent);

        // Visual feedback
        const originalText = copyBtn.innerHTML;
        copyBtn.innerHTML = '<span class="copy-icon">✓</span>コピーしました！';
        copyBtn.style.background = 'hsla(120, 60%, 50%, 0.2)';
        copyBtn.style.borderColor = 'hsl(120, 60%, 50%)';

        setTimeout(() => {
            copyBtn.innerHTML = originalText;
            copyBtn.style.background = '';
            copyBtn.style.borderColor = '';
        }, 2000);
    } catch (err) {
        console.error('Failed to copy:', err);
        alert('コピーに失敗しました');
    }
});

// ==================== //
// Smooth Scroll Enhancement
// ==================== //

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// ==================== //
// Form Initialization
// ==================== //

// Set current date automatically
const setCurrentDate = () => {
    const dateInput = document.getElementById('date');
    const today = new Date();
    const year = today.getFullYear();
    const month = String(today.getMonth() + 1).padStart(2, '0');
    const day = String(today.getDate()).padStart(2, '0');
    dateInput.value = `${year}-${month}-${day}`;
};

// Initialize dynamic select options
const initializeSelectOptions = () => {
    // Duration selects (5 min intervals)
    document.querySelectorAll('.duration-select').forEach(select => {
        const defaultVal = parseInt(select.dataset.default) || 0;
        const maxVal = parseInt(select.dataset.max) || 120;

        for (let i = 0; i <= maxVal; i += 5) {
            const option = document.createElement('option');
            option.value = i;
            option.textContent = i;
            if (i === defaultVal) option.selected = true;
            select.appendChild(option);
        }
    });

    // Hydration selects (50 ml intervals)
    document.querySelectorAll('.hydration-select').forEach(select => {
        const defaultVal = parseInt(select.dataset.default) || 200;
        const maxVal = parseInt(select.dataset.max) || 1000;

        for (let i = 0; i <= maxVal; i += 50) {
            const option = document.createElement('option');
            option.value = i;
            option.textContent = i;
            if (i === defaultVal) option.selected = true;
            select.appendChild(option);
        }
    });
};

// Initialize Application
window.addEventListener('load', () => {
    initializeSelectOptions();
    setCurrentDate();

    // Explicitly trigger change events on initially selected radios
    // to ensure conditional fields expand/collapse correctly on fresh load
    document.querySelectorAll('input[type="radio"]:checked').forEach(radio => {
        radio.dispatchEvent(new Event('change'));
    });
});
