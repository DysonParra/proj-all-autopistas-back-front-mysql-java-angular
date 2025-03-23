/*
 * @fileoverview    {Menu}
 *
 * @version         2.0
 *
 * @author          Dyson Arley Parra Tilano <dysontilano@gmail.com>
 *
 * @copyright       Dyson Parra
 * @see             github.com/DysonParra
 *
 * History
 * @version 1.0     Implementation done.
 * @version 2.0     Documentation added.
 */
package com.project.dev.api.domain;

import java.io.Serializable;
import java.math.BigDecimal;
import java.util.Date;
import javax.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

/**
 * TODO: Description of {@code Menu}.
 *
 * @author Dyson Parra
 * @since Java 17 (LTS), Gradle 7.3
 */
@Entity
@Table(name = "\"Menu\"")
@AllArgsConstructor
@Builder
@Data
@NoArgsConstructor
public class Menu implements Serializable {

    @Id
    @Basic(optional = false)
    @Column(nullable = false)
    private String strId;
    private String strTitle;
    private String strSubtitle;
    private String strType;
    private String strIcon;
    private String strLink;
    private Boolean bitExactMatch;
    private Boolean bitActive;
    private Boolean bitDisabled;
    private String strBadge;
    private String strFather;

}
