/*
 * @overview        {TransitoDinamicaMapping}
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
package com.project.dev.api.service.mapping;

import com.project.dev.api.domain.TransitoDinamica;
import com.project.dev.api.dto.TransitoDinamicaDTO;
import org.mapstruct.Mapper;
import org.mapstruct.Mapping;

/**
 * TODO: Description of {@code TransitoDinamicaMapping}.
 *
 * @author Dyson Parra
 * @since Java 17 (LTS), Gradle 7.3
 */
@Mapper(componentModel = "spring")
public interface TransitoDinamicaMapping extends GenericMapping<TransitoDinamicaDTO, TransitoDinamica> {

    /**
     * Obtiene una entidad con base en su DTO usando el campo clave de la base de datos.
     *
     * @param dto es el DTO a convertir en entidad.
     * @return la entidad equivalente al dto.
     */
    @Mapping(source = "intIdDinamica", target = "intIdDinamica")
    @Override
    public TransitoDinamica getEntity(TransitoDinamicaDTO dto);

    /**
     * Obtiene un DTO con base en su entidad usando el campo clave de la base de datos.
     *
     * @param entity es la entidad a convertir en DTO.
     * @return el DTO equivalente a la entidad.
     */
    @Mapping(source = "intIdDinamica", target = "intIdDinamica")
    @Override
    public TransitoDinamicaDTO getDto(TransitoDinamica entity);

    /**
     * Obtiene una entidad usando el ID suministrado.
     *
     * @param strId es el id de la entidad.
     * @return la entidad con el ID suministrado.
     */
    public default TransitoDinamica withId(String strId) {
        if (strId == null) {
            return null;
        }
        TransitoDinamica entity = new TransitoDinamica();
        entity.setIntIdDinamica(Long.parseLong(strId));
        return entity;
    }
}
